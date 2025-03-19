// "use client";

// import { Button } from "@/components/ui/button";
// // card
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// // from
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// const formSchema = z.object({
//   firstName: z.string().min(2).max(50),
//   lastName: z.string().min(2).max(50),
//   email: z.string().email(),
//   message: z.string().min(2),
// });

// // export const metadata = {
// //   title: "Contact",
// //   description: "This is Contact page ",
// // };

// export default function ContactForm() {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     },
//   });

//   function onSubmit(values) {
//     console.log(values);
//   }

//   return (
//     <Card className="mx-auto max-w-md my-6">
//       <CardHeader>
//         <CardTitle>Contact Us</CardTitle>
//         <CardDescription>
//           Fill out the form below and we'll get back to you as soon as possible.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>First Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Your first name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Last Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Your last name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Your Email" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="space-y-2">
//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Message</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         id="message"
//                         placeholder="Type in your message here"
//                         className="min-h-[100px]"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <Button type="submit" className=" w-full">
//               Submit
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );

// }
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // async function onSubmit(values) {
  //   setIsSubmitting(true);
  //   try {
  //     console.log("Submitted Data:", values);
  //     await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
  //   } catch (error) {
  //     console.error("Submission failed", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }
  async function onSubmit(values) {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        const result = await response.json();
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert(result.message || "Something went wrong!");
        }
    } catch (error) {
        console.error("Submission failed", error);
    }
}

  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      {/* Contact Information Section */}
      <Card className="mx-auto max-w-4xl bg-primary-50 border border-primary-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-primary-600 text-2xl">Contact Us</CardTitle>
          <CardDescription>We'd love to hear from you. Get in touch today!</CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <FormControl>
                          <Input id="firstName" placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <FormControl>
                          <Input id="lastName" placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input id="email" placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea id="message" placeholder="Type your message here" className="min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-400" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Address & Contact Details */}
          <div className="bg-primary-100 p-6 rounded-lg">
            <h3 className="text-primary-600 text-xl font-semibold mb-4">Our Office</h3>
            <div className="flex items-center space-x-3 mb-3">
<<<<<<< HEAD:app/contact/page.jsx
              <MapPin className="text-blue-600" />
              <p>35, New Market, GPO-4000, Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600" />
              <p>+8801911199697</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600" />
              <p>+8801819864771</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600" />
              <p>+8801779657708</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600" />
              <p>+8801817397967</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-blue-600" />
              <p>+8801742982184</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <p>beyond.ui1007@gmail.com</p>
=======
              <MapPin className="text-primary-600" />
              <p>123 Blue Street, Suite 456, New York, NY 10001</p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Phone className="text-primary-600" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-primary-600" />
              <p>contact@yourcompany.com</p>
>>>>>>> c01d46e3e1f5541b09cc7aff4b736872936d4358:app/(root)/contact/page.jsx
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
