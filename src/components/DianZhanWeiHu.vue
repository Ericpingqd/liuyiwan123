<template>
  <div>
    <div style="background-color: #27265c;">
      <Icon type="ios-stats" style="color: #fff;font-size: 22px;margin: 10px 10px 10px 10px;" /><span
        style="font-size: 22px;font-weight: bolder;color: #fff;">用电实时数据</span>
    </div>
    
    <div style="background-color: #fff;">
      <Row :gutter="0">
        <Col span="19">
        <br />
        <div style="font-size: 24px; margin-left: 10px; margin-top: -10px; margin-bottom: 10px;">今日用能概况</div>
        <div><p style="width: 10px; height: 10px; background-color: rgb(1, 178, 124);float: left; margin-top: 5px; margin-left: 15px; margin-right: 10px;"></p>今日建筑总电量(kWh)</div>
        <Cnnakih></Cnnakih>
        </Col>
        <Col span="5">
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <div style="margin: 18px;">
            <span class="box" style="position: absolute;top: 10px;left: 10px;"></span>
            <p style="font-size: 18px;">实时功率</p>
            <span style="color: rgb(58, 158, 217);font-size: 32px;">1,908</span>
            <span style="font-size: 18px;">kw</span>
          </div>
        </div>
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <span class="box" style="position: absolute;top: 134px;left: 10px;"></span>
          <div style="margin: 18px;">
            <p style="font-size: 18px;">今日累计用能</p>
            <span style="color: rgb(58, 158, 217);font-size: 32px;">46,531</span>
            <span style="font-size: 18px;">kWh</span>
          </div>
        </div>
        <div style="border: 2px solid rgb(199, 211, 221); margin: 10px;">
          <div style="margin: 18px;">
            <span class="box" style="position: absolute;top: 259px;left: 10px;"></span>
            <p style="font-size: 18px;">今日累计用能参考费用</p>
            <span style="color: rgb(58, 158, 217);font-size: 32px;">43,307</span>
            <span style="font-size: 18px;">RMB</span>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    <div style="background-color: rgb(199, 211, 221);">
      <Row>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="3" stroke-color="rgb(1,178,124)" style="width: 100px; height: 100px;" >
            <span class="demo-Circle-inner" style="font-size:28px">3%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">电梯系统用量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">1,192</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="32" stroke-color=rgb(47,152,214) style="width: 100px; height: 100px;">
            <span class="demo-Circle-inner" style="font-size:28px">32%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">暖通空调用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">15,079</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="2" stroke-color=rgb(1,178,124) style="width: 100px; height: 100px;">
            <span class="demo-Circle-inner" style="font-size:28px">2%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">给排水用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">777</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
        <Col span="6">
        <div style="padding: 20px;position: relative;border-right: 1px dashed #969696;">
          <i-Circle :percent="44" stroke-color=rgb(254,163,0) style="width: 100px; height: 100px;">
            <span class="demo-Circle-inner" style="font-size:28px">44%</span>
          </i-Circle>
        </div>
        <div style="position:absolute; left: 50%; top: 30%;">
          <p style="font-size: 18px;">照明用电量</p>
          <p>
            <span style="font-size: 24px;color: rgb(47, 152, 214);">20,257</span>
            <span>kWh</span>
          </p>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import Cnnakih from './Cnnakih.vue'

export default {
  name: 'DZWH',
  data() {
    return {
      
    }
  },
  components: {
    Cnnakih
    
  }
}
</script>


<style scoped>
.box {
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  border-top-color: #fea800;
  border-left-color: #fea800;
}
</style>
