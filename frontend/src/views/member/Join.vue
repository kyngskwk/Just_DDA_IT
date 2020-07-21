<template>
	<div>
		<h3>가입하기</h3>
		<div>
			<div>
				<label for="username">이름</label>
				<input v-model="username" id="username" type="text" placeholder="이름을 입력하세요.">
			</div>
			<div>
				<label for="useremail">이메일</label>
				<input v-model="useremail" id="useremail" type="text" placeholder="이메일을 입력하세요.">
				<div v-if="error.useremail">{{ error.useremail }}</div>
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input v-model="password" id="password" :type="passwordType" placeholder="비밀번호를 입력하세요.">
				<div v-if="error.password">{{ error.password }}</div>
			</div>
			<div>
				<label for="password-confirm">비밀번호 확인</label>
				<input v-model="passwordConfirm" id="password-confirm" :type="passwordConfirmType" placeholder="비밀번호를 다시한번 입력하세요.">
				<div v-if="error.passwordConfirm">{{error.passwordConfirm}}</div>
			</div>
		</div>
		<button :disabled="!isSubmit" @click="onJoin">가입하기</button>
	</div>
</template>

<script>
import * as EmailValidator from "email-validator"
import PV from "password-validator";

export default {
	name: "Join",
	data: () => {
		return {
			username: "",
			useremail: "",
			password: "",
			passwordConfirm: "",
			passwordSchema: new PV(),
			error: {
				useremail: false,
				password: false,
				passwordConfirm: false,
			},
			isSubmit: false,
			passwordType: "password",
      passwordConfirmType: "password",
		}
	},
	create() {
		this.component = this;

    this.passwordSchema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .digits()
      .has()
			.letters()
	},
	watch: {
		useremail: function() {
			this.checkEmail()
		},
		password: function() {
			this.checkPassword()
		},
		passwordConfirm: function() {
			this.checkPasswordConfirm()
			this.checkFormConfirm()
			// console.log(this.isSubmit)
    },
	},
	methods: {
		checkEmail() {
			if (this.useremail.length >= 0 && !EmailValidator.validate(this.useremail)){
				this.error.useremail = "이메일 형식이 아닙니다."
			}
			else {
				this.error.useremail = false
			}
		},
    checkPassword () {
      if (
        this.password.length >= 0 &&
        !this.passwordSchema.validate(this.password)
      )
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다."
      else this.error.password = false
		},
		checkPasswordConfirm () {
      if (this.passwordConfirm.length >= 0 &&
      this.password != this.passwordConfirm
      )
        this.error.passwordConfirm = "동일한 비밀번호를 입력하세요.";
			else this.error.passwordConfirm = false
			
		},
		checkFormConfirm () {
			let isSubmit = true
			Object.values(this.error).map(v => {
				if (v) {
					isSubmit = false
				}
			})
			this.isSubmit = isSubmit
		},
		onJoin () {
			// 백엔드에 유저 정보 넣기 
		}

	}
	

}
</script>

<style>

</style>