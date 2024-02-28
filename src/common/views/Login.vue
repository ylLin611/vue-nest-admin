<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <div>
      <img src="@/assets/img/bg.jpg" alt="" class="w-screen" />
    </div>
    <div class="absolute top-[20%] left-[50%] -translate-x-[50%]">
      <Card class="w-[400px] bg-opacity-50!">
        <CardHeader class="text-center">
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid items-center w-full gap-4">
            <div class="flex w-full max-w-sm items-center gap-1.5">
              <Input id="name" v-model:model-value="email" placeholder="邮箱前缀" class="w-[200px]" />
              <div>@reachauto.com</div>
            </div>
            <div class="flex w-full max-w-sm items-center gap-1.5">
              <Input id="name" placeholder="请输入验证码" class="w-[200px]" />
              <Button @click="getCaptcha"> 获取验证码 </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex justify-center px-6 pb-6">
          <Button class="w-full">登录</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/common/components/ui/card'
import { Input } from '@/common/components/ui/input'
import { Button } from '@/common/components/ui/button'

const email = ref()

const getCaptcha = () => {
  console.log(email.value)
}
</script>
