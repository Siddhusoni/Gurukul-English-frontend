import React, { useState } from 'react'

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
  <>

<div className="p-4 sm:ml-64">

<section className="relative w-full h-[40rem] px-6 py-24 md:px-8 md:py-32">
        <div className="w-full h-full mx-auto max-w-7xl flex flex-col justify-between gap-16 md:gap-20">
          <div className="z-20 w-full h-full flex flex-col gap-14 justify-between md:items-center md:gap-20">
            <div className="relative w-full h-full flex flex-col gap-10">
              <div className="h-[1px] bg-white/40" style={{ width: "40%" }} />
              <h1
                className="TITLE-PRIMARY text-5xl font-extrabold text-white md:text-8xl md:w-4/5"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  className="relative undefined"
                  data-link="link=&target=_blank&text=Master%20English%20with%20Us"
                >
                  Master English with Us
                </div>
              </h1>
              <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3">
                <p
                  className="w-full text-white font-light"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="relative undefined text-white"
                    data-link="link=&target=_blank&text=Join%20English%20Gurukul%20and%20embark%20on%20a%20journey%20to%20fluency.%20Discover%20the%20importance%20of%20mastering%20English%20in%20today%27s%20world."
                  >
                    Join English Gurukul and embark on a journey to fluency. Discover
                    the importance of mastering English in today's world.
                  </div>
                </p>
                <div
                  className="h-[1px] bg-white/40 mt-3.5"
                  style={{ width: "100%" }}
                />
                <p
                  className="w-full text-white font-light"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div
                    className="relative undefined"
                    data-link="link=&target=_blank&text=Personalized%20Learning%20Paths%2C%20Expert%20Guidance%20%E2%80%93%20Achieve%20your%20language%20goals%20with%20tailored%20courses%20and%20professional%20support. text-white"
                  >
                    Personalized Learning Paths, Expert Guidance – Achieve your language
                    goals with tailored courses and professional support.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full bg-black">
            <img
              className="w-full h-full opacity-70 bg-black/10 dark:bg-white/10 object-cover"
              src="https://images.unsplash.com/photo-1584697964479-60a5a1d11307?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWR1Y2F0aW9uLGxlYXJuaW5nfHx8fHx8MTcxNjcxMjMyMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2000"
              alt="backgroundImage"
            />
          </div>
        </div>
      </section>


        <div className="bg-white py-16 dark:bg-slate-800">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 bg-gradient-to-r from-[#086017] to-[#369B3D] dark:from-gray-900 dark:to-gray-600">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div className="lg:row-start-2 lg:max-w-md">
                  <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-slate-50">
                    <div
                      className="relative undefined"
                      data-link="link=&target=_blank&text=Enhance%20Your%20English%20Skills"
                    >
                      Enhance Your English Skills
                    </div>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300 dark:text-slate-300" >
                  <div
                    className="relative undefined text-gray-300 dark:text-slate-300"
                    data-link="link=&target=_blank&text=Utilize%20our%20comprehensive%20tools%20and%20resources%20to%20improve%20your%20English%20proficiency.%20Be%20part%20of%20our%20motivated%20learning%20community."
                  >
                    Utilize our comprehensive tools and resources to improve your
                    English proficiency. Be part of our motivated learning community.
                  </div>
                  </p>
                </div>
                <img
                  className="IMAGE relative z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none aspect-[2432/1442] object-cover"
                  src="https://images.unsplash.com/photo-1596495718166-7ac739ca1bc4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW5nbGlzaCxsZWFybmluZ3x8fHx8fDE3MTY3MTIzMjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000"
                  alt="imageUrl"
                />
                <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t border-black/10 dark:border-white/10 lg:pt-8">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    <div className="relative">
                      <dt className="flex items-center gap-2 font-semibold text-white">
                        <div
                          className="_icon-wrapper_kin0q_1  text-lg text-indigo-500"
                          propkey="features_0_icon"
                          aria-hidden="true"
                          data-library="FontAwesome"
                        >
                          <svg
                            className="svg-inline--fa fa-book-open"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="book-open"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"
                            />
                          </svg>
                          {/* <i class="fa-solid fa-book-open"></i> Font Awesome fontawesome.com */}
                        </div>
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Interactive%20Lessons"
                        >
                          Interactive Lessons
                        </div>
                      </dt>
                      <p className="mt-2" >
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=Engage%20with%20dynamic%20and%20interactive%20lessons%20designed%20to%20make%20learning%20fun%20and%20effective."
                      >
                        Engage with dynamic and interactive lessons designed to make
                        learning fun and effective.
                      </div>
                      </p>
                    </div>
                    <div className="relative">
                      <dt className="flex items-center gap-2 font-semibold text-white">
                        <div
                          className="_icon-wrapper_kin0q_1  text-lg text-indigo-500"
                          propkey="features_1_icon"
                          aria-hidden="true"
                          data-library="FontAwesome"
                        >
                          <svg
                            className="svg-inline--fa fa-chalkboard-user"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chalkboard-user"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"
                            />
                          </svg>
                          {/* <i class="fa-solid fa-chalkboard-teacher"></i> Font Awesome fontawesome.com */}
                        </div>
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Expert%20Tutors"
                        >
                          Expert Tutors
                        </div>
                      </dt>
                      <p className="mt-2">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=Learn%20from%20experienced%20tutors%20who%20provide%20personalized%20feedback%20and%20guidance."
                      >
                        Learn from experienced tutors who provide personalized
                        feedback and guidance.
                      </div>
                      </p>
                    </div>
                    <div className="relative">
                      <dt className="flex items-center gap-2 font-semibold text-white">
                        <div
                          className="_icon-wrapper_kin0q_1  text-lg text-indigo-500"
                          propkey="features_2_icon"
                          aria-hidden="true"
                          data-library="FontAwesome"
                        >
                          <svg
                            className="svg-inline--fa fa-calendar-days"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="calendar-days"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                            />
                          </svg>
                          {/* <i class="fa-solid fa-calendar-alt"></i> Font Awesome fontawesome.com */}
                        </div>
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Flexible%20Scheduling"
                        >
                          Flexible Scheduling
                        </div>
                      </dt>
                      <p className="mt-2" >
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=Study%20at%20your%20own%20pace%20with%20flexible%20scheduling%20options%20that%20fit%20your%20lifestyle."
                      >
                        Study at your own pace with flexible scheduling options that
                        fit your lifestyle.
                      </div>
                      </p>
                    </div>
                  </dl>
                </div>
              </div>
              <div
                className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gradient-to-b    from-[#23882D] to-[#147421] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <p className="text-base font-semibold leading-7 text-sky-400">
              <div
                className="relative undefined text-[#84CF81] font-bold"
                data-link="link=&target=_blank&text=Proven%20Success"
              >
                Proven Success
              </div>
              </p>
              <h1 className="TITLE-PRIMARY mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <div
                  className="relative undefined"
                  data-link="link=&target=_blank&text=Our%20Achievements"
                >
                  Our Achievements
                </div>
              </h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-300 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p className="DESC">
                  <div
                    className="relative undefined"
                    data-link="link=&target=_blank&text=English%20Gurukul%20has%20helped%20thousands%20of%20students%20achieve%20fluency%20in%20English.%20Our%20innovative%20approach%20ensures%20effective%20learning."
                  >
                    English Gurukul has helped thousands of students achieve fluency
                    in English. Our innovative approach ensures effective learning.
                  </div>
                  </p>
                  <p className="DESC mt-8">
                  <div
                    className="relative undefined"
                    data-link="link=&target=_blank&text=Join%20a%20community%20of%20successful%20learners%20and%20take%20your%20English%20skills%20to%20the%20next%20level%20with%20our%20proven%20methods."
                  >
                    Join a community of successful learners and take your English
                    skills to the next level with our proven methods.
                  </div>
                  </p>
                </div>
                <div>
                  <img
                    className="IMAGE w-full h-auto md:h-48 object-cover rounded-lg bg-slate-100 aspect-[4/3]"
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWR1Y2F0aW9uLHN1Y2Nlc3N8fHx8fHwxNzE2NzEyMzIz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-16 sm:py-20 relative dark:bg-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-black/10 dark:divide-white/10 lg:mx-0 lg:max-w-none">
              <div className="" style={{ opacity: 1, transform: "none" }}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div>
                    <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=Get%20in%20Touch"
                      >
                        Get in Touch
                      </div>
                    </h2>
                    <p className="DESC mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    <div
                      className="relative undefined"
                      data-link="link=&target=_blank&text=We%20are%20here%20to%20assist%20you%20in%20your%20English%20learning%20journey.%20Reach%20out%20to%20us%20with%20any%20questions%20or%20inquiries."
                    >
                      We are here to assist you in your English learning journey.
                      Reach out to us with any questions or inquiries.
                    </div>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=General%20Inquiry"
                        >
                          General Inquiry
                        </div>
                      </h3>
                      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <button className="TEXT-LINK font-semibold text-sky-400 hover:text-sky-300">
                          <div
                            className="relative undefined text-[#65BF65]"
                            data-link="link=&target=_blank&text=info%40englishgurukul.com"
                          >
                            info@englishgurukul.com
                          </div>
                        </button>
                        <p className="mt-1">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=%2B1%20%28555%29%20123-4567"
                        >
                          +1 (555) 123-4567
                        </div>
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Support"
                        >
                          Support
                        </div>
                      </h3>
                      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <button className="TEXT-LINK font-semibold text-sky-400 hover:text-sky-300">
                          <div
                            className="relative undefined text-[#65BF65]"
                            data-link="link=&target=_blank&text=support%40englishgurukul.com"
                          >
                            support@englishgurukul.com
                          </div>
                        </button>
                        <p className="mt-1">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=%2B1%20%28555%29%20234-5678"
                        >
                          +1 (555) 234-5678
                        </div>
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Partnerships"
                        >
                          Partnerships
                        </div>
                      </h3>
                      <div className="mt-3 space-y-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <button className="TEXT-LINK font-semibold text-sky-400 hover:text-sky-300">
                          <div
                            className="relative undefined text-[#65BF65]"
                            data-link="link=&target=_blank&text=partnerships%40englishgurukul.com"
                          >
                            partnerships@englishgurukul.com
                          </div>
                        </button>
                        <p className="mt-1">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=%2B1%20%28555%29%20345-6789"
                        >
                          +1 (555) 345-6789
                        </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                  <div>
                    <h2 className="TITLE-PRIMARY text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=Our%20Locations"
                      >
                        Our Locations
                      </div>
                    </h2>
                    <p className="DESC mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    <div
                      className="relative undefined"
                      data-link="link=&target=_blank&text=Find%20us%20in%20major%20cities%20around%20the%20world."
                    >
                      Find us in major cities around the world.
                    </div>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=New%20York"
                        >
                          New York
                        </div>
                      </h3>
                      <p className="mt-3 space-y-1 text-sm not-italic leading-6 text-slate-600 dark:text-slate-400">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=123%20Main%20Street%2C%20New%20York%2C%20NY%2010001"
                      >
                        123 Main Street, New York, NY 10001
                      </div>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=London"
                        >
                          London
                        </div>
                      </h3>
                      <p className="mt-3 space-y-1 text-sm not-italic leading-6 text-slate-600 dark:text-slate-400">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=456%20High%20Street%2C%20London%2C%20UK%20W1D%203QF"
                      >
                        456 High Street, London, UK W1D 3QF
                      </div>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#EBFFE8] p-10 dark:bg-slate-600">
                      <h3 className="TITLE-SECONDARY text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
                        <div
                          className="relative undefined"
                          data-link="link=&target=_blank&text=Sydney"
                        >
                          Sydney
                        </div>
                      </h3>
                      <p className="mt-3 space-y-1 text-sm not-italic leading-6 text-slate-600 dark:text-slate-400">
                      <div
                        className="relative undefined"
                        data-link="link=&target=_blank&text=789%20George%20Street%2C%20Sydney%2C%20NSW%202000"
                      >
                        789 George Street, Sydney, NSW 2000
                      </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


     
      </>
      


  )
}

export default Home
