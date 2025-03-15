import { Controller, useForm } from "react-hook-form";
import Button from "../../../../components/Buttons/Button/Button";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { ContactUsFormModel, contactUsFormSchema } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "../../../../components/Select";
import { Input } from "../../../../components/Input";
import { Textarea } from "../../../../components/Textarea";
import { PhoneInput } from "../../../../components/PhoneImput";
import { ContactCategoryViewModel } from "../../../../store/api/generated/generatedApiManager";
import useSetSafeTimeout from "use-set-safe-timeout";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUsForm() {
  // States
  const setSafeTimeout = useSetSafeTimeout();
  const [sended, setSended] = useState(false);
  // Form
  const form = useForm<ContactUsFormModel>({
    defaultValues: {
      content: "",
      contactEmail: "",
      contactPhone: "",
      category: {
        id: 0,
        title: "",
        description: "",
      } as ContactCategoryViewModel,
    },
    resolver: yupResolver(contactUsFormSchema),
  });
  // Queries
  const getMessageCategoriesQuery =
    apiManager.useGetApiManagerGetContactCategoryListQuery();
  const [sendContactUsMessageMutation] =
    apiManager.usePostApiManagerCreateNewContactMessageMutation();
  // Mutations
  const getMessageCategoriesList = getMessageCategoriesQuery.data?.data ?? [];
  // Handlers
  const handleSubmit = form.handleSubmit(() => {
    const f = form.getValues();
    sendContactUsMessageMutation({
      createNewContactMessageRequestModel: {
        content: f.content,
        contactEmail: f.contactEmail,
        contactPhone: f.contactPhone,
        categoryId: f.category.id,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          setSended(true);
          form.reset();
          setSafeTimeout(() => {
            setSended(false);
          }, 3000);
        }
      });
  });

  return (
    <div className="relative h-full flex flex-col gap-4 p-4 text-gray-700 dark:text-gray-200 rounded-r-lg">
      <AnimatePresence mode="wait">
        {sended ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex flex-col gap-4 items-center justify-center bg-white dark:bg-gray-900"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ yoyo: Infinity, duration: 0.6, ease: "easeInOut" }}
            >
              <FaCheck className="text-green-500 text-4xl" />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-100 text-lg font-bold px-10 text-center">
              İletişim mesajınız gönderildi. Size en kısa sürede dönüş
              yapacağız.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex flex-col gap-4 justify-center"
          >
            <h1 className="text-2xl font-bold">İletişim Formu</h1>
            <p className="text-sm font-semibold">
              Yardıma ihtiyacınız var mı? Bizimle iletişime geçin.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    options={getMessageCategoriesList}
                    label={"İletişim Kategorisi"}
                    invalid={fieldState.error?.message}
                    getValueField={(option) => String(option.id)}
                    getLabelField={(option) => String(option.title)}
                    emptyOption="İletişim Kategorisi Seçiniz"
                  />
                )}
              />
              <Controller
                control={form.control}
                name="contactEmail"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label={"Email Adresi"}
                    invalid={fieldState.error?.message}
                    autoComplete="off"
                    placeholder="Email Adresi Giriniz"
                  />
                )}
              />
              <Controller
                control={form.control}
                name="contactPhone"
                render={({ field, fieldState }) => (
                  <PhoneInput
                    {...field}
                    label={"Telefon Numarası"}
                    invalid={fieldState.error?.message}
                    autoComplete="off"
                    placeholder="Telefon Numarası Giriniz"
                  />
                )}
              />
              <Controller
                control={form.control}
                name="content"
                render={({ field, fieldState }) => (
                  <Textarea
                    label={"Açıklama"}
                    invalid={fieldState.error?.message}
                    {...field}
                    className="w-full min-h-48 outline-none"
                  />
                )}
              />
            </div>
            <div className="w-full flex justify-end">
              <Button
                onClick={handleSubmit}
                title="Gönder"
                varient="amber"
                size="sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
