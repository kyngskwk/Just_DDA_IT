<template>
  <div>
      <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" class="text--primary mr-2"><span class="font-weight-black">{{ followerNum }} </span><v-btn @click="addMyLicense" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon></v-btn>
        </div> 
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>자격증 추가하기</v-toolbar-title>
        </v-toolbar>
        <!-- 수동으로 추가 -->
        <div>
          <MyLicenseCreate :hostId="host.id"/>
        </div>
      </v-card>
    </v-dialog>
    <v-card>
        <!-- <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title> -->
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="자격증명*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['todo', 'doing', 'pass']"
                  label="현재 상태*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="점수*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="등급*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="기한*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="시험 날짜"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'MyLicenseCreate',
  data() {
    return {
      "dialog1": false,
      "notifications": false,
      "sound": true,
      "widgets": false,
      licenseTitle: null,
      licenseId: null,
      licenseStatus: null,
      licenseScore: null,
      licenseGrade: null,
      dueData: null,
      testDate: null
    }
  },
  props: {
    hostId : {
      type: String
    }
  }
}
</script>

<style>

</style>