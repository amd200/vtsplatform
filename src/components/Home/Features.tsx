import React from 'react'

function Features() {
  return (
<section className="features py-4">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    
    <div className="box flex items-center gap-x-3 justify-center p-4 bg-primary/20 rounded-lg">
      <img src="assets/Imgs/Video Presentation.svg" alt="" className="w-20 h-20" />
      <div className="text mt-3">
        <h4 className="text-center font-semibold text-lg">اسأل معلمك</h4>
        <p className="text-center text-gray-600">اطرح اسئلتك واحصل على الأجوبة</p>
      </div>
    </div>

    <div className="box flex items-center gap-x-3 justify-center p-4 bg-primary/20 rounded-lg">
      <img src="assets/Imgs/Video.svg" alt="" className="w-20 h-20" />
      <div className="text mt-3">
        <h4 className="text-center font-semibold text-lg">احدث الدروس</h4>
        <p className="text-center text-gray-600">احجز كل دروسك بسهولة</p>
      </div>
    </div>

    <div className="box flex items-center gap-x-3 justify-center p-4 bg-primary/20 rounded-lg">
      <img src="assets/Imgs/Exam Time.svg" alt="" className="w-20 h-20" />
      <div className="text mt-3">
        <h4 className="text-center font-semibold text-lg">اختبر نفسك</h4>
        <p className="text-center text-gray-600">اختبر قدراتك باستمرار مع مختلف الامتحانات</p>
      </div>
    </div>

  </div>
</section>
  )
}

export default Features