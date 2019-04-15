<template>
	<div class="imagePre">
		<header class="mui-bar mui-bar-nav">
	        <a @click="goToindex" class="mui-action-back mui-icon mui-icon-back mui-pull-left" href="javascript:void(0)"></a>
	        <a @click="sheetVisible=true" class="mui-icon mui-icon-camera mui-pull-right" href="javascript:void(0)"></a>
	    </header>
	    <div class="imageContainer">
	    	<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
	    	<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				sheetVisible: false,
				actions: [{
					name: '拍照',
					method: this.takePhoto
				}, {
					name: '从相册中选择',
					method: this.openAlbum
				}],
				slide1: [
		          {
		            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
		            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
		            alt: 'picture1',
		            title: 'Image Caption 1',
		            w: 600,
		            h: 400
		          },
		          {
		            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
		            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
		            alt: 'picture2',
		            title: 'Image Caption 2',
		            w: 1200,
		            h: 900
		          },
		          {
		            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
		            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
		            alt: 'picture1',
		            title: 'Image Caption 1',
		            w: 600,
		            h: 400
		          },
		          {
		            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
		            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
		            alt: 'picture2',
		            title: 'Image Caption 2',
		            w: 1200,
		            h: 900
		          },
		          {
		            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
		            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
		            alt: 'picture1',
		            title: 'Image Caption 1',
		            w: 600,
		            h: 400
		          },
		          {
		            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
		            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
		            alt: 'picture2',
		            title: 'Image Caption 2',
		            w: 1200,
		            h: 900
		          },
		          {
		            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
		            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
		            alt: 'picture1',
		            title: 'Image Caption 1',
		            w: 600,
		            h: 400
		          },
		          {
		            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
		            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
		            alt: 'picture2',
		            title: 'Image Caption 2',
		            w: 1200,
		            h: 900
		          }
		        ]
			}
		},
		methods: {
			goToindex(){
				this.$router.go(-1)
			},
			takePhoto(){

			},
			openAlbum(){

			}
		}
	}
</script>
<style>
	.imagePre {
		height: 100%;
	}
	.imagePre .imageContainer{
		height: 100%;
  		padding-top: 3em;
	}
	.imagePre .imageContainer .my-gallery{
		/*display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: stretch;*/
	}
</style>