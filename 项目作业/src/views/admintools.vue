<template>
  <div>
    <h2>管理员信息</h2>
    <div class="tools">
      <p>姓名</p>
      <p>注册时间</p>
      <p>管理员权限</p>
      <p>管理员ID</p>
      <p>
        更换头像：<el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLt2M) {
        this.$message.success("上传成功");
      }
      return isJPG && isLt2M;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
h2 {
  text-align: center;
   margin: 20px 0;

}
.tools {
  width: 500px;
  margin: 0 auto;
  padding: 1px;
  background-color: white;
  border-radius: 8px;
  p {
   margin: 15px;
  }
}
</style>
