<template>
	<view class="image-upload">
		<view class="upload-head">
			<view class="tit">{{title}}</view>
			<view>{{upload_picture_list.length}}/{{maxNumber}}</view>
		</view>
		<view class="upload-body">
			<view class="upload-files">
				<block v-for="(image,index) in upload_picture_list" :key="index">
					<view class="upload-file">
						<image  :src="image.path" mode="aspectFill"></image>
						<!-- <image v-show="image.upload_percent == 100" :src="image.path_server" mode="aspectFill" :data-index="index" @click="previewImgs"></image> -->
						<view class="upload-process" v-show="image.upload_percent != 0&&image.upload_percent != 100" :data-index="index" @click="previewImg">{{image.upload_percent}}%</view>
						<view class="delt" :data-index="index" :data-url="image.server_path" @tap="delImg">
							<uni-icon :size="40" type="shanchu-m"></uni-icon>
						</view>

					</view>
				</block>
				<view class="upload-input" @tap="chooseImage" v-if="upload_picture_list.length < upImgConfig.maxCount"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		name: "image-upload",
		props: {
			upImgConfig:{
				type: Object
			},
			maxNumber: {
				type: [String, Number],
				default: 4
			},
			title:{
				type:String,
				default:'点击可预览选好的图片'
			}
		},
		components: {
			uniIcon
		},
		data() {
			return {
				upload_after_list: [],
				upload_picture_list: []
			};
		},
		mounted() {
			
		},
		methods: {
			chooseImage() {
				chooseImage(this,this.upImgConfig);
			},
			previewImage(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			delImg(e) {
				uni.showModal({
					title: "提示",
					content: "确定删除此张图片?",
					success: (res) => {
						if (res.confirm) {
							DeleImage(e,this)
						}
					}
				})
			},
			upLoadImages(e){
				uImage(this,e)
			}
		}
	}
	
	const chooseImage = (_this,configs) => {
		let config = {
			url:configs.basicConfig.url,
			count:parseInt(configs.maxCount)
		}
		uni.chooseImage({
			sourceType: ['camera', 'album'],
			sizeType: ['compressed', 'original'],
			count: config.count - _this.upload_picture_list.length > 0 ? config.count - _this.upload_picture_list.length : 0 ,
			success:async (res) => {
				console.log(res)
				for (let i = 0, len = res.tempFiles.length; i < len; i++) {
					res.tempFiles[i]['upload_percent'] = 0;
					res.tempFiles[i]['path_server'] = '';
					res.tempFiles[i]['server_path'] = '';
					_this.upload_picture_list.push(res.tempFiles[i]);
					// _this.upload_picture_list.length > config.count ? _this.upload_picture_list = _this.upload_picture_list.slice(
					// 	0,
					// 	config.count) : '';
				}
				// 过滤多出的预览图片
				if(configs.autoUpload){
					await uImage(_this,configs);
				}
				
			},
			fail: err => {
				console.log('选择图片失败！')
				// #ifdef APP-PLUS  
				if (plus.os.name == 'iOS') {
					var PHPhotoLibrary = plus.ios.importClass('PHPhotoLibrary')
					var PHAuthorizationStatus = PHPhotoLibrary.authorizationStatus()
					if (PHAuthorizationStatus != 3) {
						uni.showModal({
							content: '需要访问您的相册，请在设置里开启',
							confirmText: '设置',
							success: res => {
								if (res.confirm) {
									plus.runtime.openURL('app-settings://')
								}
							}
						});
					}
				}
				// #endif  
				console.log(JSON.stringify(err))
			}
		})
	}
	// 上传图片(通用)
	const uImage = async (_this, configs) => {
		
		for (let i = 0, len = _this.upload_picture_list.length; i < len; i++) {
			if (_this.upload_picture_list[i]['upload_percent'] == 0) {
				await upload_file_server(_this, configs, _this.upload_picture_list, i)
			}
		}
	}
	// 上传文件
	const upload_file_server = async (_this, configs, upload_picture_list, j) => {
	
		let basicConfig = {
			url: configs.basicConfig.url || ""
		}
		uni.showLoading({
			title:'上传中...'
		})
		const upload_task = await uni.uploadFile({
			url: basicConfig.url,
			filePath: upload_picture_list[j]['path'],
			name: 'file',
			formData: {},
			async success(res) {
				if (res.statusCode == 200) {
					let data = JSON.parse(res.data);
					// 修改获取的图片返回值路径
					upload_picture_list[j]['server_path'] = data.url;
					upload_picture_list[j]['path_server'] = 'http://www.xyzcwl.com/' + data.url; 
					_this.upload_after_list[j] = data.url;
					_this.upload_picture_list = upload_picture_list;
					
					if(_this.upload_after_list.length == _this.upload_picture_list.length){
						uni.hideLoading();
						await tImage(_this);
					}	
				}
			},
			async fail(err) {
				uni.showLoading({
					title: `上传失败!`
				});
				_this.upload_picture_list = [];
				_this.upload_after_list = [];
				setTimeout(() => {
					uni.hideLoading();
				}, 2000)
				console.warn(err, '请检查是否CORB/CORS错误!')
			}
		});
		upload_task.onProgressUpdate(async (res) => {
			// for (let i = 0, len = _this.upload_picture_list.length; i < len; i++) {
			// 	upload_picture_list[i]['upload_percent'] = await res.progress;
			// }
			upload_picture_list[j]['upload_percent'] = await res.progress;
			_this.upload_picture_list = upload_picture_list
		});
	}
	
	// 上传图片子组件->父组件(通用)
	const tImage = async (_this) => {
		await _this.$emit('onUpImg', _this.upload_after_list);
	}	
	// 删除图片
	const DeleImage = async (e, _this) => {
		await _this.$emit('onImgDel', {
			url: e.currentTarget.dataset.url,
			index: e.currentTarget.dataset.index
		});
		_this.upload_picture_list.splice(e.currentTarget.dataset.index, 1);
		_this.upload_picture_list = _this.upload_picture_list;
	}

</script>

<style lang="scss" scoped>
	.image-upload {
		font-size: 28upx;
		.upload-head {
			height: 50upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.tit {
				font-weight: 600;
			}

			border-bottom: 1px solid #ccc;
		}

		.upload-body {
			.upload-files {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.upload-input {
					position: relative;
					margin: 10upx;
					width: 208upx;
					height: 208upx;
					border: 2upx solid #D9D9D9;
					// box-shadow:6upx 6upx 12upx rgba(112, 128, 144, 0.7);
					&:before,
					&:after {
						content: " ";
						position: absolute;
						top: 50%;
						left: 50%;
						-webkit-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
						background-color: #D9D9D9;
					}

					&:before {
						width: 4upx;
						height: 79upx;
					}

					&:after {
						width: 79upx;
						height: 4upx;
					}
				}

				.upload-file {
					margin: 10upx;
					width: 210upx;
					height: 210upx;
					position: relative;

					image {
						display: block;
						width: 210upx;
						height: 210upx;
						box-shadow:6upx 6upx 12upx rgba(112, 128, 144, 0.7);
					}
					.upload-process{
						font-size: 24upx;
						color: #fff;
						width: 210upx;
						height: 210upx;
						// margin-left: 4%;
						text-align: center;
						line-height: 210upx;
						position: absolute;
						top: 0;
						left: 0;
						opacity: 0.7;
						// border-radius: 8upx;
						background-color: #000;
					}
					.delt {
						background: rgba(0,0,0,.4);
						position: absolute;
						top: 2upx;
						right: 2upx;
					}
				}
			}
		}
	}
</style>
