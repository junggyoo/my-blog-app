export type BannerData = {
  message: string;
  status: 'success' | 'error';
};

export default function Banner({
  banner: { message, status },
}: {
  banner: BannerData;
}) {
  const isSuccess = status === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      {`${icon} ${message}`}
    </p>
  );
}
