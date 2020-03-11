<template>
  <div>
    <!--头部-->
    <header-all ></header-all>
    <div class="articleMain">
      <div class="content">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item label="名字" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="内容" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
            <img src="../../../static/img/logo.jpg" alt="" class="listLogo">
          </el-col>
        </el-row>
      </div>
    </div>
    <!--底部-->
    <footer-all></footer-all>
  </div>
</template>


<script>
  import Headerall from '@/components/header/header.vue'  //引用头部组件
  import Footerall from '@/components/footer/footer.vue'  //引用底部组件
  export default {
    components:{
      'header-all':Headerall,   //引用头部组件
      'footer-all':Footerall   //引用头部组件
    },
    data(){
      return{
        ruleForm:{
          name:'',
          email:'',
          phone:'',
          desc:''
        },
        rules:{
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请留下邮箱', trigger: 'blur' },
          ],
          phone:[
            { required: true, message: '请留下电话', trigger: 'blur' }
          ],
          desc:[
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/stylus/articleList.styl';
</style>
