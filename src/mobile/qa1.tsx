import { ReactComponent as WhiteArrowRight } from "../assets/arrow.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import { ReactComponent as One } from "../assets/qa1/01.svg";
import { ReactComponent as Textfield } from "../assets/qa1/textfield.svg";
import { ReactComponent as Textfield2 } from "../assets/qa1/textfield2.svg";
import { ReactComponent as Textfield4 } from "../assets/qa1/textfield4.svg";

const QA1 = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/assets/qa_title.png"
        alt="title"
        className="w-[375px] h-[348px]"
      />
      <div className="w-[375px] h-[991px] bg-qa1-bg1 relative overflow-hidden">
        <One className="absolute w-[131px] h-[100px] left-[30px] top-[40px]" />
        <div className="absolute w-[48px] h-[65px] left-[72px] top-[58px] text-[24px] text-[#00cde6]">
          保養攻略
        </div>

        <img
          src="/assets/qa1/curve1.png"
          alt="curve1"
          className="absolute w-[375px] h-[572px] top-[275px]"
        />
        <Textfield className="absolute w-[330px] h-[733px] left-[14px] top-[173px]" />
        <img
          src="/assets/soulmate_icon_circle.png"
          alt="icon"
          className="absolute w-[58px] h-[58px] left-[30px] top-[148px]"
        />
        <img
          src="/assets/qa1/girl.png"
          alt="girl"
          className="absolute w-[124px] h-[118px] left-[191px] top-[30px]"
        />
        <Textfield2 className="absolute w-[246px] h-[44px] left-[98px] top-[150px]" />
        {/* 可以每天都使用A醇嗎？ */}
        <div className="absolute w-[192px] h-[27px] left-[134px] top-[160px] text-[16px] text-[#8700f0]">
          可以每天都使用A醇嗎？
        </div>

        <div className="absolute w-[280px] h-[658px] left-[47.5px] top-[224px] text-[14px] text-[#8700f0]">
          每天都使用A醇嗎？讓我們來探討一下。A醇是一種被廣泛使用於護膚品中的成分，具有美容護膚的效果。然而，使用A醇需要謹慎並遵循建議的使用方式。
          <br />
          <br />
          A醇具有強效的皮膚再生和角質代謝促進的特性，但同時也可能引起皮膚敏感、乾燥和紅腫等不良反應。因此，建議在開始使用A醇前，先試驗於小面積皮膚，並逐漸增加使用頻率和濃度，以允許皮膚適應其效果。
          <br />
          <br />
          一般而言，專家建議初次使用A醇的人從每週一到兩次開始，然後逐漸增加使用頻率，但通常也不超過每天使用。每個人的皮膚反應可能有所不同，因此重要的是仔細觀察你的皮膚狀況並聆聽它的需求。
          <br />
          <br />
          另外，使用A醇時也要特別注意白天的防曬，因為A醇可能會增加皮膚對陽光的敏感度，增加曬傷的風險。所以，在使用A醇期間，務必搭配適當的防曬措施，以保護皮膚免受陽光的傷害。
          <br />
          <br />
          總結來說，每天使用A醇並不是一個被廣泛推薦的做法，而是需要依據個人皮膚狀況和醫學專家的建議來調整使用頻率和濃度。如果你有任何疑慮或特殊皮膚情況，最好諮詢皮膚科醫生或專業的護膚專家，以獲得更準確的指導。保持皮膚健康和美麗的最佳方式是根據自己的需求制定一個適合的護膚規劃。
        </div>
      </div>
      <div className="w-[375px] h-[1273px] bg-qa1-bg2 relative overflow-hidden">
        <div className="absolute w-[286px] h-76px] left-[45px] top-[30px] text-[26px] text-white text-center">
          不確定該怎麼提問嗎？
          <br />
          <span className="text-[#00cde6]">嘗試這些句子來破冰吧！</span>
        </div>

        <img
          src="/assets/qa1/textfield3.png"
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
          src="/assets/soulmate_icon.png"
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
          <WhiteArrowRight className="absolute w-[30px] h-[23px]" />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            確認提問是否清晰
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <Check className="absolute w-[13px] h-[15px] left-[40px] top-[34px]" />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用簡單、明確語句描述你的問題，Soulmate能更好理解並提供適當的答案。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[680px]">
          <WhiteArrowRight className="absolute w-[30px] h-[23px]" />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            重新描述問題
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <Check className="absolute w-[13px] h-[15px] left-[40px] top-[34px]" />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用不同的詞彙或表達方式再次提出問題，讓Soulmate換個角度重新回覆。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[780px]">
          <WhiteArrowRight className="absolute w-[30px] h-[23px]" />
          <div className="absolute w-[144px] h-[24px] left-[40px] text-[16px] text-white">
            澄清並詳細解釋問題
          </div>
          <div className="absolute w-[2px] h-[60px] left-[15px] top-[33px] bg-white" />
          <Check className="absolute w-[13px] h-[15px] left-[40px] top-[34px]" />
          <div className="absolute w-[256px] h-[57px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            如果回答與你所需的資訊不符，可以澄清問題。你可以說「不是這個意思，我是問...」並詳細解釋你的問題。
          </div>
        </div>

        <img
          src="/assets/qa1/think.png"
          alt="think"
          className="absolute w-[315px] h-[192px] left-[30px] top-[897px] z-10"
        />
        <Textfield4 className="absolute w-[344px] h-[168px] left-[16px] top-[1089px] z-10" />
        <div className="absolute w-[280px] h-[96px] left-[48px] top-[1123px] text-[16px] text-[#8700f0] z-10">
          Soulmate可能因問題複雜程度、表達方式、領域專業性等因素而影響回覆內容及正確性，使用時請注意其限制和適用範圍，也可來信回饋您的寶貴建議。
        </div>
        <img
          src="/assets/qa1/curve2.png"
          alt="curve2"
          className="absolute w-[375px] h-[301px] top-[972px] z-0"
        />
      </div>
    </div>
  );
};

export default QA1;
