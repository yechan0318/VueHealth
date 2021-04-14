<template>
  <el-container class="challengePage">
    <el-main>
      <el-row>
        <el-col :span="12" class="topText">도전 챌린지</el-col>
        <el-col :span="12" class="topIcons">
          <i class="el-icon-chat-line-round"></i>
          <i class="el-icon-menu ml-5"></i>
        </el-col>
      </el-row>
      <hr style="margin-top: 5px" />
      <br />
      <el-row class="accountInfo">
        <el-col :span="12" class="nameText">홍동완님</el-col>
        <el-col :span="12" class="text-right">
          <div class="primaryColor">진행중인 챌린지</div>
          <div>주 5회 운동하기</div>
          <div>3개월에 몸무게 10% 감량</div>
        </el-col>
      </el-row>
      <hr style="margin-top: 5px" />

      <div class="mb-5">지인들과 함께 도전해요.</div>
      <div class="card" style="background-color: #4689cc">
        <el-row class="cardTop">
          <el-col :span="12">추천 챌린지</el-col>
          <el-col :span="12" class="text-right">추가보상</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">2달만에 몸무게 10% 감량</el-col>
          <el-col :span="12" class="text-right">50,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">한달동안 많이 걷기</el-col>
          <el-col :span="12" class="text-right">20,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">헬스장 빠지지 않기</el-col>
          <el-col :span="12" class="text-right">10,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">기타 목표 설정하기</el-col>
          <el-col :span="12" class="text-right">*** point</el-col>
        </el-row>
      </div>

      <div class="description">
        지인들과 내기를 해요. 공약을 걸고 참가비를 걷어 실행합니다. 달성율에
        따라 참가비는 환급되지만, 80%미만 달성하신분들의 미회수 참가비는
        성공하신 지인분들께 비율로 보상되어 집니다. 도전을 성공하게 하는 가장
        효과적인 방법, “돈”나를 움직이는 가장 확실한 수단입니다! 도정에 성공하신
        분들께는 참가비 보너스에 추가로 푸짐한 보상이 있습니다.
      </div>

      <hr />

      <div class="mb-5">
        세상속에 나를 던지다.
        <span class="subTitle">모르는 분들과도 경쟁해 봐야죠?!</span>
      </div>
      <div class="card" style="background-color: #b4b2e7">
        <el-row class="cardTop">
          <el-col :span="12">추천 챌린지</el-col>
          <el-col :span="12" class="text-right">추가보상</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">2달만에 몸무게 10% 감량</el-col>
          <el-col :span="12" class="text-right">30,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">한달동안 많이 걷기</el-col>
          <el-col :span="12" class="text-right">20,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">기타 목표 설정하기</el-col>
          <el-col :span="12" class="text-right">20,000 point</el-col>
        </el-row>
      </div>

      <hr />

      <div class="mb-5">
        인생은 외로운 싸움!
        <span class="subTitle">자신과의 싸움에 도전해봐요.</span>
      </div>
      <div class="card" style="background-color: #75a8e7">
        <el-row class="cardTop">
          <el-col :span="12">추천 챌린지</el-col>
          <el-col :span="12" class="text-right">추가보상</el-col>
        </el-row>
        <el-row class="cardText">
          <el-col :span="12">2달만에 몸무게 10% 감량</el-col>
          <el-col :span="12" class="text-right">30,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">한달동안 꾸준히 1만보 걷기</el-col>
          <el-col :span="12" class="text-right">20,000 point</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">기타 목표 설정하기</el-col>
          <el-col :span="12" class="text-right">20,000 point</el-col>
        </el-row>
      </div>

      <hr />

      <div class="mb-5">
        기업후원 챌린지
        <span class="subTitle">미션 즐기고 제품할인 받고, 성공보상까지</span>
      </div>
      <div class="card" style="background-color: #f5ac98">
        <el-row class="cardTop">
          <el-col :span="12">추천 챌린지</el-col>
          <el-col :span="12" class="text-right">추가보상</el-col>
        </el-row>
        <el-row class="cardText">
          <el-col :span="12">1개월 동안 매일 인바디 재기</el-col>
          <el-col :span="12" class="text-right">인바디 저울 **% 할인</el-col>
        </el-row>

        <el-row class="cardText">
          <el-col :span="10">작심3일</el-col>
          <el-col :span="14" class="text-right"
            >3일 기준 다이어트 식단 **% 할인</el-col
          >
        </el-row>

        <el-row class="cardText">
          <el-col :span="12">단백질 음료 마시기</el-col>
          <el-col :span="12" class="text-right">단백질 음료 **% 할인</el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.challengePage {
  color: #666666;
  letter-spacing: -1px;
  font-weight: bold;
}
.topText {
  font-size: 22px;
  color: #353bad;
}
.topIcons {
  text-align: right;
  font-size: 26px;
  color: #8c8c8c;
}
.nameText {
  font-size: 24px;
  line-height: 60px;
}
.accountInfo {
  font-size: 15px;
}
.card {
  padding: 10px;
  border-radius: 5px;
}
.cardTop {
  color: #ffff33;
  font-size: 16px;
}
.cardText {
  color: white;
  font-size: 14px;
  margin-top: 3px;
}
.description {
  margin-top: 5px;
  font-size: 12px;
  font-weight: normal;
}
.subTitle {
  font-size: 12px;
  font-weight: normal;
}
</style>