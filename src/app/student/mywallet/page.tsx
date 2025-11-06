"use client";
import TitleSection from "@/components/shared/TitleSection";
import MyWallet from "@/features/student/components/MyWallet";
import { useGetStudentWalletQuery } from "@/features/student/services/studentApi";
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
function Page() {
  const { data, isLoading } = useGetStudentWalletQuery();

  return (
    <section>
      <div className="container">
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-ar-medium">شحنات المحفظة</DialogTitle>
            </DialogHeader>

            <form className="space-y-3">
              <Input placeholder="الكود" />
              <RadioGroup defaultValue="comfortable" dir="rtl">
                <div className="flex border p-4 rounded border-dashed items-center gap-3">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1" className="flex items-start flex-col">
                    <img src="https://drooosk.com/img/mobile-wallets.png" alt="" />
                    <span className="font-ar-medium text-xs  text-gray-600">الدفع بفودافون كاش ومحافظ الجوال الاخرى</span>
                  </Label>
                </div>
                <div className="flex border p-4 rounded border-dashed items-center gap-3">
                  <RadioGroupItem value="default22" id="r2" />
                  <Label htmlFor="r1" className="flex items-start flex-col">
                    <img
                      width={40}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABaCAYAAADXaio8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABRuSURBVHgB7V0LdBRVmv7ureq8SEIgIQ9ACAMqojxHkHUUURTfyjqM5qDja1fQUXd1Rked9XhwxuOozCju7Lqjo0cdRRzfo67r6II4ijIiwxsCGEgIL5MAnXenu6ru/vdWJemkq5N+VCcu8EGfTndV1+Orv777P27dy5BiiF3IoLcMtNCLq78BC3ldVjLClqUCFgLQ6dUO+bflfJbvWQiwUfAjxWDwCGIziumtGIJepiJT/p1Be0gdiV5DEPEakW7RS777UEmG4Gcn4wA8QMJkK4ttwCTawlg6uOL/V6TGC3kRGBGvoxxBVLLJid0FcZMttqIUIcykAyjF0QqGdXT3roiX9JjJFl+R9WbggqOa5O6Ik/SYyBbrMZ3eLkDi8Dt783f53A5Ot6kIa8C8hpQ4K0zmwtuSzmV5SAS2xKxgE7Gqt1V7JFvpcqOy5kmIbaeVRNwB2aiQ1BygBiaQqL71B8RaRXgeNY7yYhSruzjW9ogT4eOxoqdVopKtiG7C9WpnUVdSFimvqGw0KnGEgi5CKV2ASY6ERr8DSFbYBLwTfXG0HaxHGb2NjbJYukfvHMkERwMRP4mseCaik76KJOVDtwWuZIuNtDFLbTCujR0tcNzemfTn9CirfOim4TxiQ1K3ohEtrfkoJ1qCos2A4sGKotECM53IuQsiyCZtmuO6AVs21uEYOkB8rHAlnDmORTd0IVsFLG5+tKV8yWNEu0ARDhe3jzw4x7vpQFfLNl01yO9s8BiiIZf4cYsTfF357CBbXQXTxfvQjxHdG6SGk/xGWrdB1h2m3eGWXeqyHZnxOiYfsSCbyO5u3VK7/Z1xit6xwHbau0KjLFffQF504bxw37XInzIZ0wZm4IzzLsZ4HMb36OsiOvhcek+DtBlQyMVQR7noXds2YuuK9fiirh5f3P84qrtt10IfQFq32EB8dY+2fUotKtU67d+Jdbg3IizV8Xuvcrlux+e8FBnP/gYjLzkT84vGYh5RdJxogsZCQKiOjlcP+5VAl+jANMkmsgF1GeR6eTjQuAvvL35l3OIHHtiy2Vmty8VMFYjssbSHsm5f+8lNXNx+ELYX0p1ouiVSSLQG+8Stla/gHCJ27T/disohOfgF2eVI7CSia2m5vxvREt3CME1uqZVe8kj30kY3oTBHwz+ffnHJJu3+5ZUX/PLG62FfUOHsN3XIcY2o89p129bsoEv+g6UkFOfOy/xyKU4zW1B5+gVYZn6DidgBi0txsGjPzDmCeOCszRg4XTxM8620+N7DIz48+MPnix9/s27KPTdfKffrrJ0S0lVDyV0MtNFuD9sbyMg4n3tu1T56WYvuQmZgL5ZNvwSrxHaMENWwNK6o4vAITDDk5AV4SeFuBqNWfLvTP+jv1qV/GvrbV7eeckPZcbBJ15EKCBfehM2vfYLMxbKFZ2RLIuWJhfZ8jrPvegiHfU04h6zZlCRLS4TnEOr/mEGkK0YGE1xwFtxn7NsVGFs+6qbdJz382C2wG1kNHtZhnV1H8qZ1JTsyX2t6ksxvt1ijYQd+PWwyllvl0HgbWbOWYv0kskuy6uk8fPZHwXTwEMzaCmtr/UlPFfzypWWwLdzTu6qjah8OM5xs00VG8pK27PaTMEUrPszOwr3BbTA469DtlCNdNgKi6yEJxjlr2WfU1ennDHxi+TYsXCgXCM+OKa13GYmwbCX2iaOT6BZ8au7B+eQRh9J0khNvb9oe0RCi0+KRbrZgms5Yk1G/ffcJY4on70XnJUme8KALbw6/vHuyxEGypSwpEdKi/2LuxQzeghBpsw99BqZoq2rMpyMJua5hy4owD27ZXywE/wa2e5i0KUQpAzqWneai18kVXyWpRkMNHjFrMLvviYZ0R5Qa7zo8HMzXw6kwaCZ8RqgKo4P7VQ5IanjybYkLf9LX5q7dvnjCZMvbMHT4C5yVk457mB9GnxNNEBoFCTUFqDtcQpLRc9Coc0PnrTB8HGe17Mfd8IJw5spfhucN1eN3IjNvKlaEKmDyVPmyvYBlCnxYdQoJg0yj9EC2pSErvRVamqWb+2Fk5uKxNa9hDDq9FE8hbdgrzZbEWrf8HB8YFaQlvo5IsE9BWkxuCLBkB6WSMw/3vDKRXZjlV0dON4MeojTSlLn4zFmauCEyF/78yPPKsiWtxv6/YlpGFmbyAAUMom/cuwjQXpv86VhVOYVIb+15XVPHqNwa20yYysNY1g4Uh2rxU9jW7ek5eEk2ir+PP5F8gPP+kQ91IFkCH1ecDKM1l8LTXrKrZhom5e+mVqb9x6TVAVh6Hh5+eiElbz2GV2Rbq1/BeeRjlvq0jmRPn0PIa07N/aL1VGsdcNiWlJ7QloUZRdvpvfMrMhRYO5F+1Y9wPzxyBzu2TTboloSKxxtRF+zUi/C4tRu2dfQTBLk+NXU5+LLiNLD05l7WplA2qwFjCw90WrbaiDp7a+BJuHP+/IQ9qUjNToum2fH52dafn1Ut+Cm8j6oi7iDy8iw8tfYckgctLCSkvwxqMeuLgEAO0jT7xmPUOI7Ir0ZhfkPEUXOmakAZc6bgCnhYcPBERk4bj584GYH+aRQhrZo4a+V48us54ANrbYIpqLEaijEypxZ/uGQRrjnlYwQbB9vrNw/C+SPXRaOSUeSLC29UDaX6DA/gSUNWdDyuEntU4r7fwNIEVu8ZBf/OaeAl2zBp+Eb8+AcvYe4JazCi8KAqm2V/2oaX18yh4/RD0MW4ZvSXXfQ6HBp5JlQBmnL71cj93RJK/3uApMm+sQxD6USGIqI62LewAgzTSnbif/9lLk7O34fiknpbi1vowPykC80C40k25C1ACW5kDjiI6aU7IQJSM1zM26LMSRv4P56Jc4nst+ABkr7trzob00SVYrkf7VrqrIAV5Jg1aiuKqeHDIcj6u/KWGS0TBsPIvEPwpTeR3OTivOO/hD7AjH7QtEB8C5wxG5fDIyRNdmMjTmf9ptRdIS3UChJLFK5LH8svXeUckm+hKcKzBwSQP5CCmIYi3EH6rS5GD+2fPK2gGbWnatxImqY5F2O8aEA/gtn+dSb9VSDQzNPx8rp/wNTnF2LQo29h1qs/h55j2i0opUqmFVagpKASM0/YRnrdy81IN8SAERjx2kLVVyVpJK3ZmoHhfS0gMlgh2QWnRhHZAsEmHz7ePg5PbjoXn30zHW0yeswmySiowvKNs1Ez+/coTG+AcVDD25c+iYDlg9XMOjqu9AC5OOPr3Sig931IEsl7IwJF6CMoC063Q3KT9PmLijF4YtNsfLDjdAQahqiokWc20HK/uiAh8qXha8Xu+sEoHNoA3bKkpiCLBSFMpqSlV9AuDUOd43eAbLsvUspgkQkznWgeSC9TYF3lCDy16Wy8Vj4D9YeGk3xIcumVX6UuhopPwsN0+nNHfTFOHVlJAiw6+kXFRLSDUMibc/TCstNTJSOSPJ5hwR/IwoMfXIZXiOCamtFkrQHw7DrS6N22pKi1WbSNYKu/OKkzNVWLkDz6LTsXCxgXaDXSULJ4KQKUDmW5teCUpbOEiwVHg68N2+v7TOl6RPJOG0vpw6JoaUtDoGkwNMo7MyreWiLO20hvwzZ/MZKBj8nQKHl44SHXI1Wg+zc/twmfL7gRomUQ5TkKqGYYZwbXF0Q15UeElbjWZWR4c45ekF2DFCLUpOEHo3eg5b65OGP0airbFxHhsScXpeA0tWajpTkt/hjXaUwzs1ALD5A02SIN1SKFiVUfWbLVQGn3Nguf/evDWDD1TRiyP0isx0cEt7Vlo6YxJ7GaOWW3S8Z/R8h+431sYAORUnAqb0lPLXhAx8sbzidXL567mn7YNgB7SPfjPlu6UI1VqF6wQKW0kva5kiZ7cC5WihQXwmRugw+xUPbeAjS35pCXEucOqWEtl41knHUXGaX6OL5s/4gkkTTZSz7G31hpeydd7yG9Dz3XxCfrx+Lt1VdAzzsQv0dCfvnmQ0Pjc3Rl4EPX56O38Gd4hKTJfv510rMghbLC+9BGBiyM2rXGtkzMWroIGkWJppWA8OpBlDeUxGfZTFUjreogPoVH6WNPkqO1G/GS94V/smpZDMwVmPCH30D4WiCoftjb7SPz2swiE24couqPKr7kBqrqh8geprHvW6a607Hutl+Ayjze3LWekP3oM/gvNkxaondSYpAFa4UWZr10FyrrSqFToxiTfNDv8iiQeWjmM7AaCyHIx2aUmjzQlA+jTYvVRgWntMtHf8QieAju2lNexDWED//tc6gi9+9r0/LmdpMNol5s4qfvlmE5eR++QXvou97tQmfkJtaNxFMzn8O/zflvHPzZPMyf+gYVdwfDXzWJ5Ci2AdooOSgoqdpSvxyvIzEJieQvCL872fFBedmfv4W79JHKupPyTRTRhSae+vRsPLH8JviG7LRTpb1AZvEMst5TT/wcZad9heAu2SGmFU/PeRG7b7sBS6+7DYN8zbEIAuVgwQ9uw++ufN3bDkdeFbS0GddSQ5KJbWTdCW9TET3ExGtfTcWtbz9AMlKhvusN6jEHk0pfZjo+Kfs1rEMMaaTTXJpoHcPwjEMoO2W1yoH3BsriCv49WO89goXofFjVE3hFtrKAPStwpT6G2idLPYkVFxTRBSbeWzsJV736KLSiCjpxHtOZahS+m3Wj8FHZPcjOCCB879LimTy6FtlTtedQV3ahFxngjX7cd8ML3ifYovWISmT0Se24C7GhrRnviHT17EzMQbxsDKV0vLHmVFz20hP0905YMRqUzJMYpNM3nfkCzp24BUa9pjySuCFUkYCTsezPLcBjSOa59yijpXE1bkCMK/cC1cX23dsxVzsegWCo94ZF+tEWleb1EhOLPzkPP1r6qJIOU6D3TpGQlko6TeWwcSM24JkrXoRVw1UjmQgMC1baWLC/L8Gs9sNDorBc+MuTDWSsK8cI2ag0bcbUtJPAgsHociIlQtYSZbnr8j/egTvfu5csukJZdCxnKeXBpNB9UGYTNs+/W+k0S5AfatRD+lDw5mbc9/1rsRV2rOl5RCx7bHpl2RLyttNzJmLTwbW4LY3cYzoRo+sKREkag1Zs4at9o5C/6Dm8u3kWfEXfKPculkBU1Q+DmeD0qrxtvt2FzIivrhgGw8qgeo6JldmFeAR2bjDuNqcbIlw/OWS0e7ZAJG7ZsA/UV3A6/lM0YoKVhfnqiTGdgmWq5PEMgR1VRbjlreuwjCrjLG8/tIEHYnLv1EFLQuXzjS0DsfvOa5Gb1kq3Eu+18YsCM2RB9x2PnTrHGbAtOil3zxmGzhW6fG5PrO/2bfLDM8uUpI/lYIFo07JxSMyr2ZttvL91gv4fm87D2m9Oo4x8I7l5u0hOmHrFAtnwiTbKC7QS0Xdci2G5hym3LXU6IaINRfREyus8iOPhPCSLZOWjJfozSnrYhy4r0RXKS3K0dEm4ztLNq8c9/TK2bC6Zh9o2A3mHdD64WiX1jTiyd9JyTSqNSSuoumseCgc0ENFaQg2iacJg2UT097CdMZyIzoFmktdpt0cdnQeauLNCpE/ZiOSqpDakpOhbFlxzNdqa78XJXIfeQm44s0SMRMu1ZLXGPDwMw7MP4uDdV6Mwo8Gx6LiJFrRzkxdDD2ThfaYpojnCRvRJGm5P3zkPF3DnQ9SH2z2AIhxPX/YoaqpPReHIEPQ02q/otRFSAQn9Cx04AZeM/wjVP7sZmSZV2Fvilw6ZRqCaL+NjobUFcP2AYbgUYSP6wCtwFyN1xm5pHyggUi40z8iWsAn/95vWYMOzA6hc/T8oHKFDFS/dK5gyWJFPB1j+Eiy56j689+Mnyb3jKk3K4yGaXHkZtbNCCjTHYOOmv6A4cxRehPPcJrx28XoYuyW6ZRuejwBvqP29/rrAw1dehPK/TULRiO3IK+LS7NojThmocMMH49sxmHrcRtTf80PMm7KKPmsqRRmze0fbCxl0JXPB+ck4tG87LmeZmDD+ctUboN2987665DYEthau2aYL2XSF3AZvTfpQHF8cLz+wHvdfcCIqVp+BQUPWIX8Y18n/Nv2lKEhrwbLrbhVfzX8QOSxA1h2TPgthjxoihOwsdgI4uXQV+2txJfOhYNhZeBedwUpKqqZqRhO34UScgc2UN+K4fxEeiTMAYCW8h7Qq2wNY8quV9D4ZM244ziieff2S6341d95Ffx1H+9ZBWTphiK6y0e1hEoO2pMveZXIIpCwqsAhUV6zEm8texDM/eQjbnNWkJVtIPljpGXJgs+4xedjAZp3j+q1Xo+J272VfzibiVaQeXcbdu/125F44AeO2bMeMO27AeKqGjXa6JhdCjg1px4zf0qsOg7DrlaXYqlv4fGsAaxYupO9sdBk3sC8gNuB6l4GDO8bS7iRbDjXPaeUuvyaXZSAWJzmqzlEBNUgOxx0RCyzib3K4ZkNJSSXcxhJt8u6ZkiMamssA7+R4hI+sw7v9IHKkXBPTowxtdAwOnHHHJ0Us8HXlsyvZ0UbK1VGWAs/kiIAyxKDraPoRIzR3ITvqONDSd2xMalKgIxLKAHU10G3kne8y7nhk8SBbkR0ZUcph5am1PSYpNhQP0ebxIXfPbdzxCLKVdbeRuydc+5Moj4Wc995nZDqCoeaqYbg5yoRJfmrn3nH7HetxgzzKzB72LyuRjlXsxD4b0Lxf4Uz9VQoZi0SbzE4aaBAvsGnuo332PLdYb4Tb8DvEl3s5UeV3ATKnT8WAUrLUUrLisT0WVXohWqL3Crg92rlsHGPTauGMId3+LntcZajpsWxZ6qzmB/ojWOqY5laifapbOc2tnNpWUxMi2ZO4yfFpY69Y+aX09kS0REwZfNUY+IhwM+pcY6mBPRNf7Bekf6axLUcu3onFcOLqNBjDJGZHD6R02hNvVsb+kwQQNmXf0eWVCDXL9TqqrpYnMmNg0l18FfE+Z9LkI23i5PZ2R74SJDgc3j+aIef69amGp1g1PrKW2a6l4dO79tc04eHtQOd0tp3T3hpqGvCALKh4PUur52R7iUSi1e/yNLb/B4xqlXzEejm5AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <span className="font-ar-medium text-xs  text-gray-600">الدفع بواسطة فوري</span>
                  </Label>{" "}
                </div>
                <div className="flex border p-4 rounded border-dashed items-center gap-3">
                  <RadioGroupItem value="default3" id="r3" />
                  <Label htmlFor="r3">Default</Label>
                </div>
              </RadioGroup>
              <Button className="mt-2 ms-auto block">تفعيل</Button>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-ar-medium">طلب استعادة مبلغ شحن</DialogTitle>
            </DialogHeader>

            <form className="space-y-3">
              <Input placeholder="رقم الهاتف" />
              <Input placeholder="الموضوع" />
              <Textarea  placeholder="الرسالة" />
              <Button className="mt-2 ms-auto block">إرسال الطلب</Button>
            </form>
          </DialogContent>
        </Dialog>
        <div className="flex items-center justify-between">
          <TitleSection title="محفظتي" />
        </div>
        <MyWallet charges={data?.Data?.StudentCharges || []} isLoading={isLoading} />
      </div>
    </section>
  );
}

export default Page;
