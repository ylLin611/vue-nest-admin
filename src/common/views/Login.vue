<template>
  <div class="w-100vw h-100vh overflow-hidden relative">
    <div>
      <img src="@/assets/img/bg.jpg" alt="" class="h-100vh" style="transform: scale(-1, 1)" />
    </div>
    <div
      class="absolute top-50% -translate-y-50% right-200px bg-#fff rounded-20px card-shadow px-40px py-70px bg-opacity-20"
    >
      <div class="text-24px font-600 text-#fff text-center">管理平台</div>
      <div class="mt-40px w-400px">
        <!-- <div class="mb-20px text-red">用户名或密码错误</div> -->
        <div>
          <a-input v-model:value="userName" placeholder="工号/手机号" class="h-40px">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </div>
        <div class="mt-30px">
          <a-input-password v-model:value="password" placeholder="请输入密码" class="h-40px">
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </div>
        <div class="mt-40px">
          <a-button type="primary" shape="round" size="large" @click="loginRegister" class="w-100%"> 登录 </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userName = ref()
const password = ref()
const className = ref('hint-show')

watch(userName, () => {
  className.value = 'hint-show'
})

const router = useRouter()
const loginRegister = () => {
  if (userName.value === 'admin' && password.value === '123456') {
    localStorage.setItem('user', 'admin')
    router.replace('/')
  } else {
    className.value = 'hint-conceal'
  }
}
</script>
