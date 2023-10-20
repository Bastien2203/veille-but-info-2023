import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const articles: Array<{ name: string; description: string; content: string }> =
  [
    {
      name: "The Art of Coding",
      description:
        "Exploring the world of programming and its creative aspects.",
      content:
        "Coding is not just about machines; it's an art form that allows us to create amazing digital worlds. The process of writing code involves creativity, problem-solving, and endless possibilities. From web development to game design, coding is at the heart of it all, and we'll delve into the artistry behind it in this article.",
    },
    {
      name: "Machine Learning Essentials",
      description:
        "An introduction to the fundamental concepts of machine learning.",
      content:
        "Machine learning is the future of data-driven decision-making, and understanding its basics is crucial. In this article, we will explore the fundamental concepts that underpin machine learning, including algorithms, training data, and model evaluation. You'll gain insight into how machines can learn from data and make predictions, paving the way for intelligent applications in various fields.",
    },
    {
      name: "The Power of JavaScript",
      description:
        "A deep dive into the versatility and ubiquity of JavaScript.",
      content:
        "JavaScript is the language that powers the modern web and is used in both frontend and backend development. Its versatility and ubiquity are unmatched in the world of programming. In this article, we'll take a deep dive into JavaScript, exploring its features, libraries, and the role it plays in web development. You'll gain a profound understanding of why JavaScript is essential for building dynamic and interactive web applications.",
    },
    {
      name: "Cryptocurrency Revolution",
      description:
        "Unraveling the mysteries of blockchain and digital currencies.",
      content:
        "Cryptocurrencies like Bitcoin and Ethereum are changing the way we think about finance and technology. The blockchain technology that underlies these digital currencies has the potential to revolutionize various industries. In this article, we'll unravel the mysteries of blockchain and explore the impact of cryptocurrencies on the financial world. From decentralized finance (DeFi) to non-fungible tokens (NFTs), you'll discover the innovations brought about by the cryptocurrency revolution.",
    },
    {
      name: "Exploring Space Exploration",
      description: "Discovering the latest advancements in space exploration.",
      content:
        "From Mars rovers to interstellar missions, the realm of space exploration is expanding at an incredible pace. In this article, we'll embark on a journey through the latest advancements in space exploration. You'll learn about the missions to other planets, the search for extraterrestrial life, and the technologies that make it all possible. Space is the final frontier, and humanity is pushing the boundaries of what's possible.",
    },
    {
      name: "The World of Virtual Reality",
      description:
        "Immersing ourselves in the exciting world of virtual reality.",
      content:
        "VR technology is transforming how we interact with digital environments, from gaming to healthcare. Virtual reality (VR) is no longer a concept of the distant future; it's a technology that's shaping the present. In this article, we'll immerse ourselves in the exciting world of virtual reality. You'll explore its applications in gaming, education, healthcare, and beyond. Strap on your VR headset and get ready for a journey into the immersive digital realm.",
    },
    {
      name: "Green Energy Solutions",
      description: "Addressing the importance of sustainable energy sources.",
      content:
        "Renewable energy options like solar and wind power are key to a greener and more sustainable future. The world is facing environmental challenges, and transitioning to green energy sources is crucial. In this article, we'll address the importance of sustainable energy solutions. You'll learn about solar panels, wind turbines, and other green technologies that are changing the way we power our homes and industries. The future is bright, and it's powered by clean energy.",
    },
    {
      name: "Artificial Intelligence Insights",
      description:
        "Delving into the innovations and challenges of AI technology.",
      content:
        "AI is shaping industries and enhancing human capabilities, but it also raises ethical and privacy concerns. Artificial intelligence (AI) is at the forefront of technological advancements. In this article, we'll delve into the innovations and challenges of AI technology. You'll gain insights into machine learning, natural language processing, and the impact of AI on various industries. We'll also discuss the ethical and privacy concerns associated with AI, emphasizing the need for responsible development and usage.",
    },
    {
      name: "The Evolution of Smartphones",
      description:
        "Tracking the evolution of mobile technology from the early days to today.",
      content:
        "Smartphones have become an integral part of our lives, combining various functionalities in one device. The evolution of smartphones is a testament to human ingenuity and technological progress. In this article, we'll track the journey of mobile technology from the early days of cell phones to the sophisticated smartphones of today. You'll discover the innovations that have shaped the way we communicate, work, and entertain ourselves in the digital age.",
    },
    {
      name: "Data Privacy in the Digital Age",
      description:
        "Examining the importance of safeguarding personal information online.",
      content:
        "Data privacy is a critical concern in the era of digital connectivity, with significant implications for individuals and businesses. In an increasingly digital world, the protection of personal information is of paramount importance. In this article, we'll examine the critical role of safeguarding data privacy in the digital age. You'll gain an understanding of the risks, regulations, and best practices associated with data security, both for individuals and businesses.",
    },
    {
      name: "The Future of Healthcare Tech",
      description:
        "Predicting the role of technology in shaping the future of healthcare.",
      content:
        "Healthcare technology, from telemedicine to wearables, is revolutionizing the way we access and manage our health. The future of healthcare is intertwined with technology. In this article, we'll predict the role of technology in shaping the healthcare landscape. You'll explore telemedicine, wearable devices, electronic health records, and other advancements that are making healthcare more accessible and efficient. The intersection of health and tech is a promising frontier.",
    },
    {
      name: "Diving into Quantum Computing",
      description:
        "Unpacking the potential and challenges of quantum computing.",
      content:
        "Quantum computing promises to revolutionize computational power, tackling complex problems previously deemed unsolvable. Quantum computing is on the horizon, and it has the potential to change the world of computation. In this article, we'll dive deep into quantum computing, exploring the principles of superposition and entanglement. You'll discover the applications of quantum computing in cryptography, optimization, and scientific research. While quantum computing offers great promise, it also presents significant challenges that we'll explore.",
    },
    {
      name: "Cybersecurity in a Digital World",
      description:
        "Examining the growing importance of cybersecurity in the age of digital threats.",
      content:
        "With the rise of cyberattacks, cybersecurity measures are essential to protect sensitive data and systems. The digital world is more connected than ever, but it's also vulnerable to various cyber threats. In this article, we'll examine the growing importance of cybersecurity. You'll explore the methods used by cybercriminals, as well as the tools and practices employed by cybersecurity professionals to safeguard networks and data. Understanding cybersecurity is essential for individuals, organizations, and governments.",
    },
    {
      name: "The Impact of 5G Technology",
      description:
        "Understanding the implications of 5G on communication and connectivity.",
      content:
        "5G technology is set to enable faster, more reliable wireless communication, powering IoT and other innovations. The rollout of 5G technology is changing the way we connect and communicate. In this article, we'll dive into the impact of 5G on our digital lives. You'll understand how 5G is revolutionizing industries such as healthcare, transportation, and entertainment. The increased speed and reduced latency of 5G are opening doors to new possibilities, including the Internet of Things (IoT) and augmented reality.",
    },
    {
      name: "The World of Augmented Reality",
      description:
        "Exploring the applications and potential of augmented reality technology.",
      content:
        "AR is enhancing our interactions with the physical world by overlaying digital information and experiences. Augmented reality (AR) technology is blurring the lines between the physical and digital worlds. In this article, we'll explore the applications and potential of AR. You'll discover how AR is transforming industries like education, healthcare, and gaming. Whether it's enhancing learning experiences or providing real-time information, AR is changing the way we interact with our surroundings.",
    },
    {
      name: "Sustainable Agriculture Practices",
      description:
        "Highlighting eco-friendly farming methods and their benefits.",
      content:
        "Sustainable agriculture is vital for food security and environmental conservation, emphasizing responsible practices. Agriculture plays a crucial role in feeding the world's population, but it's also a significant contributor to environmental challenges. In this article, we'll highlight sustainable agriculture practices that prioritize eco-friendly farming methods. You'll learn about organic farming, crop rotation, and other techniques that promote responsible and sustainable food production. Sustainable agriculture is not only about feeding the present but also safeguarding the future of our planet.",
    },
    {
      name: "The Age of Electric Vehicles",
      description:
        "Examining the rise of electric cars and their impact on transportation.",
      content:
        "Electric vehicles are helping reduce emissions and reshape the automotive industry towards a greener future. The automotive industry is undergoing a significant transformation with the rise of electric vehicles (EVs). In this article, we'll examine the age of electric vehicles and their impact on transportation. You'll gain insights into the benefits of EVs, including reduced emissions and lower operating costs. We'll also discuss the challenges and innovations driving the transition to electric mobility.",
    },
    {
      name: "Blockchain Beyond Cryptocurrency",
      description:
        "Discovering the diverse applications of blockchain technology.",
      content:
        "Blockchain extends beyond cryptocurrencies to revolutionize supply chains, voting systems, and more. While blockchain technology gained notoriety through cryptocurrencies, its applications extend far beyond digital coins. In this article, we'll discover the diverse applications of blockchain technology. You'll explore how blockchain is revolutionizing supply chains, improving security, and transforming voting systems. The decentralized and transparent nature of blockchain has the potential to reshape various industries and processes.",
    },
  ];

prisma.article.deleteMany({}).then(() => {
  articles.forEach((article) => {
    prisma.article
      .create({
        data: article,
      })
      .then((res) => console.log(res));
  });
});
