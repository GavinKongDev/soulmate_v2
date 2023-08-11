import { useEffect } from "react";

const QA2 = () => {
  useEffect(() => {
    document.title = "Soulmate 搜美 - 醫美解密";
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img
        src="assets/mobile/qa_title.png"
        alt="title"
        className="w-[375px] h-[348px]"
      />
      <div className="w-[375px] h-[991px] relative overflow-hidden bg-[url('/assets/mobile/qa_bg1.png')]">
        <img
          src="assets/mobile/qa2/02.svg"
          className="absolute w-[131px] h-[100px] left-[30px] top-[40px]"
        />
        <div className="absolute w-[48px] h-[65px] left-[72px] top-[58px] text-[24px] text-[#00cde6]">
          醫美解密
        </div>

        <img
          src="assets/mobile/qa_curve1.png"
          alt="curve1"
          className="absolute w-[375px] h-[572px] top-[275px]"
        />
        <img
          src="assets/mobile/qa2/textfield1.svg"
          className="absolute w-[330px] h-[772px] left-[14px] top-[173px]"
        />
        <img
          src="assets/mobile/soulmate_icon_circle.png"
          alt="icon"
          className="absolute w-[58px] h-[58px] left-[30px] top-[148px]"
        />
        <img
          src="assets/mobile/qa2/girl.png"
          alt="girl"
          className="absolute w-[119px] h-[122px] left-[196px] top-[26px]"
        />
        <img
          src="assets/mobile/qa1/textfield2.svg"
          className="absolute w-[246px] h-[44px] left-[98px] top-[150px]"
        />
        <div className="absolute w-[192px] h-[27px] left-[124px] top-[160px] text-[16px] text-[#8700f0]">
          做音波拉提應該注意什麼？
        </div>

        <div className="absolute w-[280px] h-[658px] left-[47.5px] top-[224px] text-[14px] text-[#8700f0]">
          當進行音波拉提時，以下是一些需要注意的事項：
          <br />
          <br />
          1.專業操作：音波拉提通常由訓練有素的專業人士執行，如美容師或皮膚科醫生。確保你選擇有經驗和專業知識的人來執行這項程序。
          <br />
          <br />
          2.健康狀況：如果你有任何皮膚問題、炎症、傷口、過敏史或正在接受其他皮膚治療，應該在進行音波拉提前咨詢醫生。確保你的皮膚狀況適合進行這項程序。
          <br />
          <br />
          3.護理指導：遵循專業人士的指導和建議，包括事前和事後的皮膚護理。這可能包括避免使用刺激性產品、保持皮膚清潔和保濕等。
          <br />
          <br />
          4.效果與期望：理解音波拉提的效果和期望。它通常被用於提升皮膚緊緻度、減少皺紋、改善肌膚質地等。然而，每個人的反應可能不同，並且結果可能需要多次治療才能看到。
          <br />
          <br />
          5.副作用和風險：雖然音波拉提通常被視為一種安全的非侵入性程序，但仍然存在一些潛在的副作用和風險。這可能包括暫時性的紅腫、瘀斑、敏感或刺激感等。諮詢專業人士以了解這些可能的風險。
          <br />
          <br />
          最重要的是，尋求專業意見並仔細評估你的個人情況，確定音波拉提是否適合你的皮膚需求。這將有助於確保你獲得安全且有效的結果。
        </div>
      </div>
      <div className="w-[375px] h-[1273px] relative overflow-hidden bg-[url('/assets/mobile/qa_bg2.png')]">
        <div className="absolute w-[286px] h-76px] left-[45px] top-[30px] text-[26px] text-white text-center">
          不確定該怎麼提問嗎？
          <br />
          <span className="text-[#00cde6]">嘗試這些句子來破冰吧！</span>
        </div>

        <img
          src="assets/mobile/qa1/textfield3.png"
          alt="textfield3"
          className="absolute w-[375px] h-[244px] top-[136px]"
        />

        <div className="absolute w-[180px] h-54px] left-[134px] top-[149px] text-[16px] text-[#8700f0]">
          皮膚很乾可以用什麼樣的保養品增強保濕呢？
        </div>
        <div className="absolute w-[160px] h-54px] left-[56px] top-[233px] text-[16px] text-[#8700f0]">
          使用保養品時有沒有正確的順序？
        </div>
        <div className="absolute w-[180px] h-54px] left-[134px] top-[305px] text-[16px] text-[#8700f0]">
          物理性防曬與化學性防曬有什麼不同？
        </div>

        <img
          src="assets/mobile/soulmate_icon.png"
          alt="soulmate_icon"
          className="absolute w-[148px] h-[26px] left-[30px] top-[437px]"
        />
        <div className="absolute w-[130px] h-38px] left-[188px] top-[431px] text-[26px] text-[#00cde6]">
          回覆的內容
        </div>
        <div className="absolute w-[227px] h-76px] left-[30px] top-[474px] text-[26px] text-white">
          不是你想要的資訊?
          <br />
          <span className="text-[#00cde6]">你可以⋯⋯</span>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[580px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            確認提問是否清晰
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用簡單、明確語句描述你的問題，Soulmate能更好理解並提供適當的答案。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[680px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            重新描述問題
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用不同的詞彙或表達方式再次提出問題，讓Soulmate換個角度重新回覆。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[780px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[144px] h-[24px] left-[40px] text-[16px] text-white">
            澄清並詳細解釋問題
          </div>
          <div className="absolute w-[2px] h-[60px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[57px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            如果回答與你所需的資訊不符，可以澄清問題。你可以說「不是這個意思，我是問...」並詳細解釋你的問題。
          </div>
        </div>

        <img
          src="assets/mobile/qa1/think.png"
          alt="think"
          className="absolute w-[315px] h-[192px] left-[30px] top-[897px] z-10"
        />
        <img
          src="assets/mobile/qa1/textfield4.svg"
          className="absolute w-[344px] h-[168px] left-[16px] top-[1089px] z-10"
        />
        <div className="absolute w-[280px] h-[96px] left-[48px] top-[1123px] text-[16px] text-[#8700f0] z-10">
          Soulmate可能因問題複雜程度、表達方式、領域專業性等因素而影響回覆內容及正確性，使用時請注意其限制和適用範圍，也可來信回饋您的寶貴建議。
        </div>
        <img
          src="assets/mobile/qa_curve2.png"
          alt="curve2"
          className="absolute w-[375px] h-[301px] top-[972px] z-0"
        />
      </div>
    </div>
  );
};

export default QA2;
