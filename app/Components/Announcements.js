import React from 'react'

const Announcements = () => {
  const announcements = [
    {
      title: "Proglobby Standouts Sessions",
      description: "Join us on Discord",
      link: "https://discord.gg/proglobby",
    },
    {
      title: "New Course",
      description: "We are excited to announce the launch of our new course on React",
      link: "/courses/react",
    },
  ]
  return (
    <div className='w-screen order-1 lg:w-[20%] lg:order-2'>
      <div className="text-primary font-jetbrains">
        <ul className="text-start">
          {announcements.map((announcement, index) => (
            <li key={index}>
              <div className='glassCard p-[20px]'>
                <h3>{announcement.title}</h3>
                <p>{announcement.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Announcements