<template>
  <tr>
      <th scope="row">{{ passLicense.license.licenseName }}</th>
        <td>
          <span :v-if="passLicense.licenseScore !== null"> / {{ passLicense.licenseGrade }}</span>
        </td>
      <td>{{ passLicense.gainDate }}</td>
      <td>{{ passLicense.dueDate }}</td>
      <td><v-btn>수정</v-btn><v-btn>삭제</v-btn></td>
  </tr>
</template>

<script>
export default {
  name: 'MyLicenseItem',
    props: {
    passLicense: {
      type: Object
    }
  }
}
</script>

<style>

</style>