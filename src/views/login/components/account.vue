<template>
	<el-form ref="formRef" :model="form" class="login-content-form" :rules="rules" @submit.native.prevent>
		<el-form-item prop="userName">
			<el-input type="text" placeholder="用户名 admin" v-model="form.userName" clearable autocomplete="off">
				<template #prefix>
					<SvgIcon icon="ElIconUser" class="el-input__icon" />
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input :type="isShowPassword ? 'text' : 'password'" placeholder="密码：123456" v-model="form.password" autocomplete="off">
				<template #prefix>
					<SvgIcon icon="ElIconUnlock" class="el-input__icon" />
				</template>
				<template #suffix>
					<SvgIcon
						:icon="isShowPassword ? 'icon-yincang' : 'icon-xianshi'"
						class="el-input__icon login-content-password"
						@click="isShowPassword = !isShowPassword"
					/>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="code">
			<el-row :gutter="15">
				<el-col :span="16">
					<el-input type="text" maxlength="4" placeholder="请输入验证码" v-model="form.code" clearable autocomplete="off">
						<template #prefix>
							<SvgIcon icon="ElIconPosition" class="el-input__icon" />
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
			<el-button type="primary" native-type="submit" class="login-content-submit" round @click="onSignIn" :loading="signIn">
				<span>登 录</span>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent } from 'vue';
import { login } from '/@/api/login';
import { STORAGE_ADMIN_TOKEN } from '/@/config';
import { Local } from '/@/utils/storage';
import { useStore } from '/@/store';
import { useRouter } from 'vue-router';
import SvgIcon from '/@/components/svgIcon/index.vue';
export default defineComponent({
	name: 'Account',
	components: {
		SvgIcon,
	},
	setup() {
		const formRef = ref();
		const store = useStore();
		const router = useRouter();

		const state = reactive({
			form: {
				userName: 'admin',
				password: '123456',
				code: '1234',
			},
			rules: {
				userName: [{ required: true, message: '请输入用户名', trigger: ['blur', 'change'] }],
				password: [{ required: true, message: '请输入密码', trigger: ['blur', 'change'] }],
				code: [{ required: true, message: '请输入验证码', trigger: ['blur', 'change'] }],
			},
			isShowPassword: false,
			signIn: false,
		});

		const onSignIn = () => {
			formRef.value.validate(async (valid: boolean) => {
				if (!valid) {
					return;
				}
				state.signIn = true;
				try {
					const { data } = await login(state.form);
					Local.set(STORAGE_ADMIN_TOKEN, data.token);
					await store.dispatch('userInfoModule/setUserInfo', data.userInfo);
					await router.push('/');
				} finally {
					state.signIn = false;
				}
			});
		};

		return {
			formRef,
			...toRefs(state),
			onSignIn,
		};
	},
});
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
