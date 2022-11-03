export function cpf(eventCpf: React.FormEvent<HTMLInputElement>) {
  eventCpf.currentTarget.maxLength = 14;
  let value = eventCpf.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    eventCpf.currentTarget.value = value;
  }

  return eventCpf;
}
