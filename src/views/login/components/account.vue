<template>
	<el-form class="login-content-form">
		<el-form-item>
			<el-input type="text" placeholder="用户名 admin 或不输均为 test" v-model="ruleForm.userName" clearable autocomplete="off">
				<template #prefix>
					<el-icon class="el-input__icon"><ElIconUser /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-input :type="isShowPassword ? 'text' : 'password'" placeholder="密码：123456" v-model="ruleForm.password" autocomplete="off">
				<template #prefix>
					<el-icon class="el-input__icon"><ElIconUnlock /></el-icon>
				</template>
				<template #suffix>
					<i
						class="iconfont el-input__icon login-content-password"
						:class="isShowPassword ? 'icon-yincangmima' : 'icon-xianshimima'"
						@click="isShowPassword = !isShowPassword"
					>
					</i>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-row :gutter="15">
				<el-col :span="16">
					<el-input type="text" maxlength="4" placeholder="请输入验证码" v-model="ruleForm.code" clearable autocomplete="off">
						<template #prefix>
							<el-icon class="el-input__icon"><ElIconPosition /></el-icon>
						</template>
					</el-input>
				</el-col>
				<el-col :span="8">
					<div class="login-content-code">
						<span class="login-content-code-img">1234</span>
					</div>
				</el-col>
			</el-row>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" class="login-content-submit" round @click="onSignIn" :loading="signIn">
				<span>登 录</span>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	name: 'account',
	data() {
		return {
			ruleForm: {
				userName: undefined,
				password: undefined,
				code: undefined,
			},
			isShowPassword: false,
			signIn: false,
		};
	},
	methods: {
		onSignIn() {},
	},
};
</script>

<style scoped lang="scss">
.login-content-form {
	margin-top: 20px;
	.login-content-password {
		display: inline-block;
		width: 25px;
		cursor: pointer;
		&:hover {
			color: #909399;
		}
	}
	.login-content-code {
		display: flex;
		align-items: center;
		justify-content: space-around;
		.login-content-code-img {
			width: 100%;
			height: 40px;
			line-height: 40px;
			background-color: #ffffff;
			border: 1px solid rgb(220, 223, 230);
			color: #333;
			font-size: 16px;
			font-weight: 700;
			letter-spacing: 5px;
			text-indent: 5px;
			text-align: center;
			cursor: pointer;
			transition: all ease 0.2s;
			border-radius: 4px;
			user-select: none;
			&:hover {
				border-color: #c0c4cc;
				transition: all ease 0.2s;
			}
		}
	}
	.login-content-submit {
		width: 100%;
		letter-spacing: 2px;
		font-weight: 300;
		margin-top: 15px;
	}
}
</style>
