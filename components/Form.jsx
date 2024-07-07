"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
const Form = () => {
  //   async function handleSubmit(event) {

  //     event.preventDefault();
  //     const formData = new FormData(event.target)
  //     try {

  //         const response = await fetch('/api/contact', {
  //             method: 'post',
  //             body: formData,
  //         });

  //         if (!response.ok) {
  //             console.log("falling over")
  //             throw new Error(`response status: ${response.status}`);
  //         }
  //         const responseData = await response.json();
  //         console.log(responseData['message'])

  //         alert('Message successfully sent');
  //     } catch (err) {
  //         console.error(err);
  //         alert("Error, please try resubmitting the form");
  //     }
  // };
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6 size={20}" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6 size={20}" />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-4 right-6 size={20}" />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-1" type="submit">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
