	<template>
		<div class="login_nav">
			<div class="bgground">
				<div class="login_switch">
					<van-tabs v-model="active">
					  <van-tab title="手机号快捷登录">
							<van-cell-group>
							  <!-- 输入手机号，调起手机号键盘 -->
							  <van-field v-model="tel" type="tel" 
								placeholder="请输入你的手机号" />
								<van-field
								  v-model="sms"
								  center
								  clearable
								  placeholder="请输入验证码"
								>
								  <template #button>
								    <van-button size="small">获取验证码</van-button>
								  </template>
								</van-field>
								<div data-v-182efa6e="" class="alir">未注册过的手机将自动来创建为热庄子新帐号</div>
								<div style="margin: 16px;">
								  <van-button round block type="info" native-type="submit">登录</van-button>
								</div>
							</van-cell-group>
						</van-tab>
					  <van-tab title="帐号密码登录">
							<van-form @submit="onSubmit">
							  <div class="contact_user">
									<img id="contact_icon1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACKElEQVRIx73WPWjWQBzH8e8TK1KraAUFXTrUwUGhgm7dLPKAxaG+bA5/PB0OJ1GqiyAI3bp5g5ycHSr44NZOviCKVISCWztVaQcFlYK2Q1G0DkngoSbNJbmnvy253P+TS3J3gQox1u011u2q0rfhCRwAFHAWGAB2JE3LwAzwBGhpJb9qgca6bcBN4A7QXVDrE3BVK3lRCTTW7QRawJkST2wduKGVjJcCjXUN4CkwUgJrj2glj7IaopwOV2pgAMZY1+8FGuu6gXs1MIjfd2aNrBGOAPtrggDnjHX7fMBmAAxgOzDkAx4NBAIc8wF7A4K7fcAfAcFVH3AxIPjRB3wZEHztA7aA3wGwGa1koRDUSr4ADwKAd7NO5i1tt8h4/iXyUCt55g1qJavAMPC1AvYKuJbXmDdCtJJ54ATwtgQ2DjS1krW8Cwp3fGNdBFwEric3sLHPGjAFjGklH4rqRUUXJFkG3pH9XueI525Pso9ums12/C7gMnAb6PO8sTlgDJjUSta9QWPdEeAxcNwT2pg3wCWtZKkQNNY1iX8veipiab4Dw1rJ+1zQWHcamCbey0LkJ3BKK5n9DzTWHQZmgT2BsDSfgQGt5BskX2nydbkOYACHgPvpQTotzgODHcDSXDDWDbaDox3E0owCNJIpML8F4F/gYES5X/k6iYChiHh93KqcjID+2mX80xdRf0Upk94IKNxSAuZ5FyDARNtIV4A/FYoV9VvRShb+AeHsg93ATI+RAAAAAElFTkSuQmCC" alt="">
								<van-field v-model="tel" type="tel" placeholder="请输入手机号"/>
								</div>
								<div class="contact_password">
									<img id="contact_icon" src="data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACYElEQVRYw72YO2gVQRSGv7s3mgjiIyoGLsEU2mgUBEWLYFJbiIUW4gMnDARGm4CNklSiICgIwlg4MhBfoPhqTCG+uYgIFkKwslIxSJIm4iskWtxNuMwdk9m9d/fv5pyz5zszzMye3QKB0sYWgM1AN9AOtALjwCfgmZJiJDRXIQBWBI4AJ4EN84R+AM4B15QUM6mh2tgScBfYEToLoAzsV1J8TQzVxrYDr4FSAuCsPgJdSorRYKg2Noor3ulx/4yLGQPWxqvQ4ol7CfQoKf66jqb/VHrIA/wNDAKXlRTfqwpcCvQDA8DiqvhdwD7gTii0zwPsVlK8cQPjAk5rY8vAsAPu80Ejz9I2U7txzviADvwpcMExd2ljayYWeZ5vA4qO7QFhuueMm4FVIVDf5poMhI55bEtCoPVoymP7kSlUSfEFeFJluq+k+ObGNYWnDNZuYC8wDTz0BTQcqqT4A9yeL2Zu02hjlwMbgXXALSfuADBKev0CRpQUk3NQbewpKrdNSx2JQ8CDSorzBW1sL3A1Q5irgxFwPEcgwLEI6MgZWopo/AWxoNIAnwOHgR7gKPAqaYKk5/QsMFD1Yn6hjR2i8nbpz2Kmbx0gAPH4BPA+C+gNX+sRg2eovVAaAp1YwD+eBXRLnf5U0F5t7GqfQxvbRqUhbzi0FRjWxnY4wPXAY2BZFlCAbcBFx2aAziRJ0lwOi5xxMWmCNNDtcYONNnYFsClpgjSdwxqgrI19BOwBVuYBhcrxCD4iriLgc9qHU2oiAm7mDB2KqHw9X88JeAW4VN0NdgJbSXEEAjQNvJv9L/EPxUaaLOfdoKUAAAAASUVORK5CYII=" alt="">
									<van-field v-model="tel" type="tel" placeholder="请输入登录密码"/>
								</div>
								
							  <div style="margin: 15px;">
							    <van-button round block type="info" native-type="submit">登录</van-button></div>
							</van-form>
						</van-tab>
					</van-tabs>
					
				</div>
			</div>
		</div>
	</template>
<script src="../../assets/script/login.js"></script>
