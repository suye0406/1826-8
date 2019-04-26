<template>
    <div id="Login">
        <div>
            <div style="width: 100%;height: 150px;"></div>
            <div style="margin-bottom: 30px;">
                <p data-v-e47bba44="" style="text-align: center; line-height: 50px; font-size: 20pt; color: white; font-family: 楷体; text-shadow: white 0px 0px 10px, white 0px 0px 20px, rgb(0, 255, 255) 0px 0px 30px, rgb(0, 255, 255) 0px 0px 40px, rgb(0, 255, 255) 0px 0px 70px, rgb(0, 255, 255) 0px 0px 80px, rgb(0, 255, 255) 0px 0px 100px;color:wheat;">商户后台</p>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <div style="width: 100%;height: 20px;"></div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="">
                    <el-input v-model="form.password"type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label=""style="margin-top: 20px;">
                    <el-button type="success"style="width: 80%;"@click="login">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name: '',
                    password:'',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            login(){
                if (this.form.name == ''){
                    alert('账号不能为空！');
                } else if (this.form.password == '') {
                    alert('密码不能为空！');
                }else {
                    axios.get('/login', {
                        params: {
                            userName:this.form.name,
                            password:this.form.password,
                        },
                    }).then(response =>{
                        console.log(response.data);
                        if (response.data.status == '0'){
                            alert(response.data.msg);
                            sessionStorage.setItem('UserName', JSON.stringify(this.form.name));
                            sessionStorage.setItem('PassWord', JSON.stringify(this.form.password));
                            sessionStorage.setItem('merchant_id', JSON.stringify(response.data.merchant_id));
                            this.$router.push({name:'List'});
                        }else {
                            alert(response.data.msg);
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #Login{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        div:nth-child(1){
            width: 80%;
            height: 50%;
            margin: 0 auto;
            label{
                font-weight: bold;
            }
            .buttom{
                width: 100%;
                margin-top: 20px;
            }
        }
        .el-form-item__content{
            margin-left: 0px !important;
        }
    }
</style>
