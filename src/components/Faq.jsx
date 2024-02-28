import React from "react";

export default function Faq() {

  const questions = [
    {
      question: "When is Yukthi'24 conducted?",
      answer: "Yukthi'24 is conducted on 15th, 16 th and 17th March, 2024."
    },
    {
      question: "Can non-participants attend Yukthi'24?",
      answer: 'Yes. They can enjoy the events and applaud for the participants.'
    },
    {
      question: 'When would the certificates for workshops be awarded?',
      answer: "Certificates for the workshops conducted during Yukthi'24 are usually issued within 5-7 days after the event."
    },
    {
      question: 'Are the workshops open to non engineering students?',
      answer: 'Yes. The advantage of B.Tech students coming under Kerala Technical University is that they can attain KTU points necessary for their academics.'
    },
    {
      question: 'Would there be spot registrations for workshops?',
      answer: 'Spot registrations are available but depend on the number of vacant seats for the corresponding event. '
    },
    {
      question: 'Are laptops compulsory?',
      answer: 'Having a laptop is not compulsory, but it is recommended for most of the hands-on workshops.'
    },
    {
      question: 'Are there any extra activities needed for the KTU points apart from attending the workshop?',
      answer: 'No. Only attending the workshop is necessary for KTU points.'
    },
    {
      question: 'Is Food & Accommodation included in the reg fee of the workshop?',
      answer: 'Not Included in the registration fee.'
    },
    {
      question: 'Timing of the workshops?',
      answer: '10:30 AM to 4:00 PM'
    },
    {
      question: 'Are there any prerequisites or anything required for the workshop?',
      answer: 'Prerequisites will be mentioned prior to the workshop.'
    },
    {
      question: 'Is a refund policy available?',
      answer: 'Yes, Full refund amount would be given for all the participants who complete the workshops.'
    },
    {
      question: "Can we participate in other Yukthi'24 events if we register for one workshop?",
      answer: 'No, For each workshop, we have separate fees so one needs to register separately for the corresponding events.'
    },
    {
      question: 'Are KTU points awarded for attending lectures?',
      answer: 'Yes. KTU points are awarded for attending lectures.'
    },
    {
      question: 'Will there be activity points given for STIST students if they attend a lecture/workshop?',
      answer: 'Yes, Activity Points will be awarded for participating in workshops.'
    },
    {
      question: 'Is it necessary to have an event pass for participation in events?',
      answer: 'Yes. There would be separate event passes for all the events.'
    },
    {
      question: 'How much does the event pass cost?',
      answer: 'It depends on which event pass you have. There are separate registration fees for each event.'
    },
    {
      question: 'Is Accommodation facility available?',
      answer: 'Yes, but rooms are limited and would be given on priority basis to students coming from long distances.'
    }
  ]
  
  return (
    <div className="px-2 py-4 xl:px-20">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white/50 text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        {questions.map((item, index) => {
          return <div key={index} className="font-chakra">
            <div className="border-t-2 border-b-2 border-gray/20">
              <input
                id={`collapsible${index+1}`}
                className="toggle hidden"
                type="checkbox"
              />
              <label
                htmlFor={`collapsible${index+1}`}
                className="lbl-toggle block cursor-pointer font-semibold text-white/40 text-xl md:text-2xl p-7"
              >
                {item.question}
              </label>

              <div className="collapsible-content">
                <div className="content-inner text-white pl-8">
                  <p>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>          
        })}
      </div>
    </div>
  );
}
