import StatCard from "@/common/StatCard";

export default function StatCards() {

  const stats = [
    { number: "۱۶۵,۷۹۰", label: "نفر دانشجو", imageSrc: "/photo1.png", width: 60, height: 50 },
    { number: "۳۲,۲۰۰", label: "بازدید روزانه", imageSrc: "/photo2.png", width: 100, height: 60 },
    { number: "۱۸,۸۹۰", label: "دقیقه آموزش", imageSrc: "/photo3.png", width: 90, height: 50 },
  ];

  return (
    <div className="flex justify-center gap-x-12 mt-10">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          number={stat.number}
          label={stat.label}
          imageSrc={stat.imageSrc}
          width={stat.width}
          height={stat.height}
        />
      ))}
    </div>
  )
}
