import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Title from "@/components/Head";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      phoneNumber,
      institutionName,
      branch,
      semester,
    });
  };

  return (
    <div className="signup relative">
      <Title title={'Sign Up - Yukthi'} description={'Sign Up to view your registrations'} />
      <Header />

      <form onSubmit={handleSubmit} className="h-fit  px-4 pb-8 pt-[6.5rem] font-chakra text-xl flex flex-col gap-6 items-center justify-center">

        <h1 className="text-[3rem] font-clash font-medium pb-6 text-white">Event Registartion</h1>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Your name"
        />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Email"
        />

        <input
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Whatsapp number"
        />

        <input
          type="text"
          value={institutionName}
          onChange={(event) => setInstitutionName(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Instutaion name"
        />

        <input
          type="text"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Branch"
        />

        <input
          type="text"
          value={semester}
          onChange={(event) => setSemester(event.target.value)}
          className="w-[22rem] md:w-[30rem] rounded-[10px] pl-4 py-2 text-base md:text-lg"
          placeholder="Semeter"
        />

        <input type="submit" value="Submit" className="w-[22rem] md:w-[30rem] p-2 font-medium text-base md:text-xl rounded-full bg-white/70 text-black hover:bg-white/30 hover:text-white cursor-pointer transition-all duration-200 ease-in-out" />
      </form>
      <Footer />
    </div>
  );
}

export default FormPage;
