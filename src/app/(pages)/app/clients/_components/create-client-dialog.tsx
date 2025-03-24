'use client'

import { useState } from 'react'

import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { User } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const createClientDialogSchema = z.object({
  name: z.string().min(2, {
    message: 'Nome deve ter pelo menos 2 caracteres.',
  }),
  email: z
    .string()
    .email({ message: 'Email inválido.' })
    .optional()
    .or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
})

type CreateClientDialogSchema = z.infer<typeof createClientDialogSchema>

export function CreateClientDialog() {
  const [open, setOpen] = useState(true)

  const form = useForm<CreateClientDialogSchema>({
    resolver: zodResolver(createClientDialogSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  function onSubmit(data: CreateClientDialogSchema) {
    console.log(data)

    toast.success('Cliente criado com sucesso!', {
      description: `Nome: ${data.name}`,
    })

    setOpen(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="secondary">
          <User className="text-primary h-6 w-6" />
          Adicionar cliente
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-secondary border-0">
        <DialogHeader>
          <DialogTitle className="text-primary">Criar Novo Cliente</DialogTitle>
          <DialogDescription>
            Preencha os dados do cliente e clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Nome
                  </FormLabel>

                  <FormControl>
                    <Input
                      className="h-9 px-4 py-6 text-popover-foreground border-popover-foreground font-medium"
                      placeholder="Digite o nome do cliente"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Email (opcional)
                  </FormLabel>

                  <FormControl>
                    <Input
                      className="h-9 px-4 py-6 text-popover-foreground border-popover-foreground font-medium"
                      placeholder="Digite o email do cliente"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground">
                    Telefone (opcional)
                  </FormLabel>

                  <FormControl>
                    <Input
                      className="h-9 px-4 py-6 text-popover-foreground border-popover-foreground font-medium"
                      placeholder="Digite o telefone do cliente"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>

              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
