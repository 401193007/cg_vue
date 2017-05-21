<template>
		<div class="common-panel">
			<tc-panel class="weui_panel_access myself-top">
				<tc-panel-d dc="horizontal">
					<div class="myself-head" style="margin-top:15px;margin-left: auto;margin-right: auto;position:relative;">
						<img class="weui_media_appmsg_thumb" src="http://cdn.awn.com/sites/default/files/styles/userthumbnail_tiny/public/creative-transformation.png?itok=e_UYRMxt" alt="">
					</div>
					<tc-btn class="tc-btn public-btn">成为社员</tc-btn>			
				</tc-panel-d>
				<tc-panel-d dc="horizontal" style="text-align: center; margin:5px auto 20px;">
					<h4 class="weui_media_title myself-name">农村的我</h4>
					<p class="myself-subtext">立即成为番茄社员，成为泛动漫行业精英！</p>				
				</tc-panel-d>	
				<tc-panel-d>
					<tc-media-box style="padding-top: 0;" class="weui_media_appmsg">
						<tc-media-item>
							<p><strong>1</strong> 小时 <strong>30</strong> 分钟</p>
							<h4>学习时间</h4>							
						</tc-media-item>
						<i class="tc-line"></i>
						<tc-media-item>
							<p>前 <strong>40%</strong></p>
							<h4>学习时间排名</h4>						
						</tc-media-item>													
					</tc-media-box>					
				</tc-panel-d>						
			</tc-panel>

			<tc-panel class="myself">
				<tc-panel-d dc="horizontal">
					<tc-media-box class="weui_media_small_appmsg">
						<tc-cells>
							<tc-cell islink="true">
								<div class="weui_cell_hd icon-wrap"><img src="./../assets/images/icon-vip.png"></div>
								<div class="weui_cell_bd weui_cell_primary">
									<p>最近浏览</p>
								</div>
								<span class="weui_cell_ft"></span>								
							</tc-cell>
						</tc-cells>
					</tc-media-box>
				</tc-panel-d>
			</tc-panel>

			<tc-panel class="myself">
				<tc-panel-d dc="horizontal">
					<tc-media-box class="weui_media_small_appmsg">
						<tc-cells>
							<tc-cell islink="true">
								<div class="weui_cell_hd icon-wrap"><img src="./../assets/images/icon-order.png"></div>
								<div class="weui_cell_bd weui_cell_primary">
									<p>我的收藏</p>
								</div>
								<span class="weui_cell_ft"></span>								
							</tc-cell>
							<tc-cell islink="true">
								<div class="weui_cell_hd icon-wrap"><img src="./../assets/images/icon-collection.png"></div>
								<div class="weui_cell_bd weui_cell_primary">
									<p>购买记录</p>
								</div>
								<span class="weui_cell_ft"></span>							
							</tc-cell>							
						</tc-cells>
					</tc-media-box>
				</tc-panel-d>
			</tc-panel>

			<tc-panel class="myself">
				<tc-panel-d dc="horizontal">
					<tc-media-box class="weui_media_small_appmsg">
						<tc-cells>
							<tc-cell islink="true">
								<div class="weui_cell_hd icon-wrap"><img src="./../assets/images/icon-setting.png"></div>
								<div class="weui_cell_bd weui_cell_primary">
									<p>设置</p>
								</div>
								<span class="weui_cell_ft"></span>								
							</tc-cell>
							<tc-cell islink="true">
								<div class="weui_cell_hd icon-wrap"><img src="./../assets/images/icon-data.png"></div>
								<div class="weui_cell_bd weui_cell_primary">
									<p>帮助与反馈</p>
								</div>
								<span class="weui_cell_ft"></span>							
							</tc-cell>							
						</tc-cells>
					</tc-media-box>
				</tc-panel-d>
			</tc-panel>			

		</div>
</template>

<script>
	import panel from "./../components/panel/panel";
	import paneld from "./../components/panel/panel-d";

	import btn from "./../components/tc-btn";

	import mediabox from "./../components/tc-media-box";	
	import mediaitem from "./../components/tc-media-item";

	import cells from "./../components/tc-cells";
	import cell from "./../components/tc-cell";

	export default {
		components : {
			"tc-panel" : panel,
			"tc-panel-d" : paneld,
			"tc-btn" : btn,
			"tc-media-box" : mediabox,
			"tc-media-item" : mediaitem,
			"tc-cells" : cells,
			"tc-cell" : cell
		}
	}
</script>