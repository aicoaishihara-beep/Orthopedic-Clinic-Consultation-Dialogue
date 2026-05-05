const medicalData = {
  title: "整形外科：腰痛診断と治療",
  scenarios: [
    {
      id: 1,
      title: "初診受付",
      dialogue: [
        {
          speaker: "受付",
          text: {
            jp: "こんにちは。初めてですか？",
            en: "Hello. Is this your first time?",
            zh: "你好。您是第一次来吗？",
            pt: "Olá. É a sua primeira vez?",
            vi: "Xin chào. Đây là lần đầu tiên bạn đến đây phải không?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "はい、初めてです。腰が痛いです。",
            en: "Yes, this is my first time. My lower back hurts.",
            zh: "好的，这是第一次。我的腰很疼。",
            pt: "Sim, é a primeira vez. Minha coluna dói.",
            vi: "Vâng, đây là lần đầu tiên. Tôi bị đau lưng."
          }
        },
        {
          speaker: "受付",
          text: {
            jp: "保険証、或いはマイナンバーカードはありますか？",
            en: "Do you have an insurance card or a My Number card?",
            zh: "您有保险证或者My Number卡吗",
            pt: "Você tem o cartão de seguro saúde ou o cartão My Number?",
            vi: "Bạn có thẻ bảo hiểm hoặc thẻ My Number không?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "はい、あります。",
            en: "Yes, I do.",
            zh: "好的，有。",
            pt: "Sim, há.",
            vi: "Có, có."
          }
        },
        {
          speaker: "受付",
          text: {
            jp: "こちらの問診票を書いてください。",
            en: "Please fill out this questionnaire.",
            zh: "请填写这份问诊表。",
            pt: "Por favor, preencha este questionário médico.",
            vi: "Xin vui lòng điền vào phiếu khám bệnh này."
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "日本語がよくわからないので、パートナーに手伝ってもらってもいいですか？",
            en: "I don't understand Japanese very well, so can I ask my partner for help?",
            zh: "我听不太懂日语，可以请我的伴侣帮忙吗？",
            pt: "Eu não entendo bem japonês, posso pedir ajuda ao meu parceiro?",
            vi: "Tôi không hiểu tiếng Nhật lắm, có thể nhờ đối tác giúp một chút được không?"
          }
        },
        {
          speaker: "パートナー",
          text: {
            jp: "私は日本語がまだ上手ではありませんが、できる限り通訳します。よろしくお願いします。",
            en: "I am not very good at Japanese yet, but I will interpret as best as I can. Thank you for your understanding.",
            zh: "我还不太会日本语，但会尽力翻译。谢谢。",
            pt: "Eu ainda não falo japonês muito bem, mas farei o meu melhor para interpretar. Obrigado pela compreensão.",
            vi: "Tôi vẫn chưa giỏi tiếng Nhật, nhưng tôi sẽ cố gắng phiên dịch theo khả năng của mình. Mong nhận được sự giúp đỡ."
          }
        },
        {
          speaker: "受付",
          text: {
            jp: "わかりました。腰痛の状態や、いつからかを記入してください。",
            en: "Understood. Please fill out the details about your back pain and when it started.",
            zh: "明白了。请填写您的腰痛状况以及开始的时间。",
            pt: "Entendi. Por favor, anote sobre a sua dor nas costas e desde quando você a tem.",
            vi: "Đã hiểu. Xin vui lòng ghi lại tình trạng đau lưng và thời gian bắt đầu."
          }
        }
      ]
    },

    {
      id: 2,
      title: "看護師による問診",
      dialogue: [
        {
          speaker: "看護師",
          text: {
            jp: "腰のどの部分が痛いですか？",
            en: "Which part of your lower back hurts?",
            zh: "你的腰哪里疼？",
            pt: "Qual parte das costas está doendo?",
            vi: "Bạn bị đau ở phần nào của lưng?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "ここです。",
            en: "Here.",
            zh: "在这里。",
            pt: "Aqui está.",
            vi: "Đây là chỗ này."
          }
        },
        {
          speaker: "看護師",
          text: {
            jp: "いつから痛いですか？",
            en: "How long have you been in pain?",
            zh: "您从什么时候开始疼痛的？",
            pt: "Desde quando está doendo?",
            vi: "Bạn bị đau từ khi nào?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "約半年前からです。",
            en: "About six months ago.",
            zh: "大约半年前开始的。",
            pt: "Há cerca de seis meses.",
            vi: "Kể từ khoảng nửa năm trước."
          }
        },
        {
          speaker: "看護師",
          text: {
            jp: "どのような仕事をしていますか？",
            en: "What kind of work do you do?",
            zh: "您从事什么工作？",
            pt: "Que tipo de trabalho você faz?",
            vi: "Bạn làm công việc gì?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "工場で重いものを運ぶ仕事です。",
            en: "It's a job where you carry heavy items in a factory.",
            zh: "这是在工厂搬运重物的工作。",
            pt: "É um trabalho que envolve transportar objetos pesados na fábrica.",
            vi: "Công việc là vận chuyển đồ nặng trong nhà máy."
          }
        },
        {
          speaker: "看護師",
          text: {
            jp: "しびれはありますか？",
            en: "Do you have any numbness?",
            zh: "你有麻木的感觉吗？",
            pt: "Você sente dormência?",
            vi: "Bạn có bị tê không?"
          }
        },
        {
          speaker: "患者",
          text: {
            jp: "少しあります。右の足です。",
            en: "There is a little on the right leg.",
            zh: "有一点。在右脚。",
            pt: "Tem um pouco. É na perna direita.",
            vi: "Một chút. Chân phải."
          }
        }
      ]
    },

{
  id: 3,
  title: "医師診察—状態確認",
  dialogue: [
    {
      speaker: "患者",
      text: {
        jp: "こんにちは、よろしくお願いします。",
        en: "Hello, nice to meet you.",
        zh: "你好，拜托了。",
        pt: "Olá, prazer em conhecê-lo.",
        vi: "Xin chào, rất vui được gặp bạn."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "問診表に腰が痛いと書かれていますが、今も痛いですか？",
        en: "The questionnaire says you have back pain. Are you still experiencing pain?",
        zh: "问诊表上写着腰痛，请问您现在还疼吗？",
        pt: "Você escreveu no formulário que está com dor nas costas. Ainda está doendo?",
        vi: "Bạn có ghi trong bảng câu hỏi là bạn bị đau lưng, bây giờ bạn còn đau không?"
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "はい、痛いです。立つときや座るとき、前かがみになると痛いです。",
        en: "Yes, it hurts. It hurts when I stand, sit, or lean forward.",
        zh: "好的，疼。站着、坐着或者弯腰的时候会疼。",
        pt: "Sim, dói. Quando eu fico em pé, sento e me inclino para frente, dói.",
        vi: "Vâng, tôi thấy đau. Đau khi đứng, ngồi hoặc cúi người về phía trước."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "インターネットで調べて、ヘルニアかもしれないと心配です。",
        en: "I searched the internet and I'm worried that I might have a hernia.",
        zh: "我在网上查了一下，担心可能是疝气。",
        pt: "Eu pesquisei na internet e estou preocupado que possa ser uma hérnia.",
        vi: "Tôi đã tìm hiểu trên internet và lo lắng có thể tôi bị thoát vị."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "そうですか。詳しく症状を教えてください。",
        en: "I see. Please tell me your symptoms in detail.",
        zh: "是吗？请详细告诉我你的症状。",
        pt: "Entendi. Por favor, conte-me mais sobre os seus sintomas.",
        vi: "Vậy à. Xin hãy cho tôi biết chi tiết về triệu chứng của bạn."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "腰が強く痛くて、しびれもあります。",
        en: "I have a strong pain in my lower back, and there is also some numbness.",
        zh: "腰部剧烈疼痛，并伴有麻木感。",
        pt: "A dor nas costas é forte e também sinto formigamento.",
        vi: "Tôi đau nhiều và có cảm giác tê."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "どちらの足ですか？",
        en: "Which leg is it?",
        zh: "哪只脚？",
        pt: "Qual pé?",
        vi: "Chân nào vậy?"
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "右足です。長く立つと強くなります。",
        en: "It's my right leg. It gets stronger when I stand for a long time.",
        zh: "右脚。长时间站立会加重。",
        pt: "É a perna direita. Fica mais forte se ficar em pé por muito tempo.",
        vi: "Chân phải. Đứng lâu sẽ cảm thấy đau nhiều hơn."
      }
    }
  ]
},

{
  id: 4,
  title: "医師診察-神経症状の確認",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "足に力を入れることはできますか？",
        en: "Can you put strength in your legs?",
        zh: "您可以用力踩脚吗？",
        pt: "Você consegue fazer força na perna?",
        vi: "Bạn có thể dùng sức cho chân không?"
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "立つときに力が入りにくいです。",
        en: "I have difficulty putting my strength in when I stand up.",
        zh: "站立时力量不太足。",
        pt: "É difícil fazer força ao ficar em pé.",
        vi: "Khi đứng, tôi cảm thấy khó khăn để có sức lực."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "歩くときはどうですか？",
        en: "How do you feel when you walk?",
        zh: "走路的时候感觉怎么样？",
        pt: "Como você se sente ao andar?",
        vi: "Đi bộ thì thế nào?"
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "長く歩くとつらいです。",
        en: "It is painful to walk for a long time.",
        zh: "走久了会很辛苦。",
        pt: "É difícil caminhar por muito tempo.",
        vi: "Đi bộ lâu thì tôi thấy mệt."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "排便は普通にできますか？",
        en: "Are you able to have bowel movements normally?",
        zh: "排便正常吗？",
        pt: "Você consegue fazer cocô normalmente?",
        vi: "Bạn có thể đi tiêu bình thường không?"
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "はい、大丈夫です。",
        en: "Yes, that's fine.",
        zh: "好的，没问题。",
        pt: "Sim, está tudo bem.",
        vi: "Vâng, không vấn đề gì."
      }
    }
  ]
},

{
  id: 5,
  title: "MRI画像検査の必要性の説明",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "椎間板ヘルニアの可能性があります。",
        en: "There is a possibility of a herniated disc.",
        zh: "可能有椎间盘突出。",
        pt: "Pode haver a possibilidade de uma hérnia de disco.",
        vi: "Có khả năng bạn bị thoát vị đĩa đệm."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "本当ですか？",
        en: "Is that true?",
        zh: "真的吗？",
        pt: "É verdade?",
        vi: "Có thật không?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "まだはっきりしないので、MRI検査を行いましょう。",
        en: "It is still unclear, so let's perform an MRI test.",
        zh: "还不太清楚，所以我们来做个MRI检查吧。",
        pt: "Ainda não está claro, então vamos fazer um exame de ressonância magnética.",
        vi: "Chúng ta sẽ tiến hành một cuộc kiểm tra MRI vì vẫn chưa rõ ràng."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "どの程度ですか？手術は必要ですか？",
        en: "How serious is it? Is surgery necessary?",
        zh: "有多严重？需要手术吗？",
        pt: "Qual é o grau? É necessário fazer cirurgia?",
        vi: "Mức độ như thế nào? Có cần phẫu thuật không?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "結果を見ないとわかりませんが、多くは手術なしで治ります。",
        en: "We won't know until we see the results, but many cases heal without surgery.",
        zh: "结果还需要查看，但大多数情况不需要手术就能治愈。",
        pt: "Não posso dizer sem ver os resultados, mas muitos casos se resolvem sem cirurgia.",
        vi: "Kết quả chưa rõ, nhưng nhiều trường hợp sẽ khỏi mà không cần phẫu thuật."
      }
    },
    {
      speaker: "看護師",
      text: {
        jp: "この後、MRI検査室で手続きをしてください。",
        en: "Please proceed to the MRI examination room for the necessary procedures.",
        zh: "接下来，请在MRI检查室进行登记。",
        pt: "Após isso, por favor, realize o procedimento na sala de exame de ressonância magnética.",
        vi: "Sau đó, hãy làm thủ tục tại phòng kiểm tra MRI."
      }
    }
  ]
},

{
  id: 6,
  title: "MRI検査結果説明（軽症の場合）",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "MRIの結果、ヘルニアではありません。",
        en: "The MRI results show that it is not a hernia.",
        zh: "MRI结果显示，没有椎间盘突出。",
        pt: "O resultado da ressonância magnética não mostra hérnia.",
        vi: "Kết quả MRI cho thấy không có thoát vị."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "筋肉や姿勢による腰痛です。",
        en: "It is back pain caused by muscles and posture.",
        zh: "由于肌肉和姿势导致的腰痛。",
        pt: "A dor nas costas é causada por músculos e postura.",
        vi: "Đây là cơn đau lưng do cơ bắp và tư thế."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "重大な病気ではないですか？",
        en: "Is it a serious illness?",
        zh: "这不是一种严重的疾病吗？",
        pt: "Não é uma doença grave?",
        vi: "Có phải là bệnh nghiêm trọng không?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "大丈夫です。安静にしてください。",
        en: "It's okay. Please rest.",
        zh: "没事。请保持安静。",
        pt: "Está tudo bem. Fique em repouso.",
        vi: "Không sao. Hãy nghỉ ngơi nhé."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "薬と湿布を出します。",
        en: "I will provide medication and a topical patch.",
        zh: "我会开药和贴膏药。",
        pt: "Vou prescrever medicamentos e um curativo.",
        vi: "Tôi sẽ cho bạn thuốc và miếng dán."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "仕事は休むべきですか？",
        en: "Should I take time off work?",
        zh: "我应该休息工作吗？",
        pt: "Devo parar de trabalhar?",
        vi: "Tôi có nên nghỉ việc không?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "重いものを持たないようにしてください。",
        en: "Please avoid lifting heavy objects.",
        zh: "请不要举重物。",
        pt: "Por favor, evite levantar objetos pesados.",
        vi: "Xin đừng mang vật nặng."
      }
    }
  ]
},

{
  id: 7,
  title: "今後の処置（軽症の場合）",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "足の力が急に弱くなる、排尿ができない場合はすぐ来てください。",
        en: "If you suddenly feel weakness in your legs or are unable to urinate, please come immediately.",
        zh: "如果突然感到腿部无力或不能排尿，请立即来这里。",
        pt: "Se você de repente sentir fraqueza nas pernas ou dificuldade para urinar, por favor, venha imediatamente.",
        vi: "Nếu bạn cảm thấy sức mạnh ở chân đột nhiên yếu đi hoặc không thể đi tiểu, hãy đến ngay."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "わかりました。",
        en: "I understand.",
        zh: "我明白了。",
        pt: "Entendi.",
        vi: "Tôi hiểu rồi."
      }
    }
  ]
},

{
  id: 8,
  title: "MRI検査結果説明（重大疾患可能性がある場合）",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "別の病気の可能性もあります。",
        en: "There may be another illness.",
        zh: "可能还有其他疾病的可能性。",
        pt: "Pode haver a possibilidade de outra doença.",
        vi: "Có khả năng là bệnh khác."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "どんな病気ですか？",
        en: "What illness do you have?",
        zh: "是什么病？",
        pt: "Que doença você tem?",
        vi: "Bệnh gì vậy?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "神経の病気や感染、腫瘍などです。",
        en: "It is related to nerve diseases, infections, or tumors.",
        zh: "神经病、感染或肿瘤等。",
        pt: "Doenças neurológicas, infecções e tumores.",
        vi: "Bệnh về thần kinh, nhiễm trùng, khối u, v.v."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "とても心配です。",
        en: "I am very worried.",
        zh: "我非常担心。",
        pt: "Estou muito preocupado/a.",
        vi: "Tôi rất lo lắng."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "精密検査で原因を確認します。",
        en: "We will confirm the cause with a detailed examination.",
        zh: "我们将通过精密检查确认病因。",
        pt: "Vamos confirmar a causa com exames detalhados.",
        vi: "Chúng tôi sẽ kiểm tra chính xác để xác định nguyên nhân."
      }
    }
  ]
},

{
  id: 9,
  title: "今後の処置（重大疾患可能性がある場合）",
  dialogue: [
    {
      speaker: "医師",
      text: {
        jp: "痛み止めを服用し、安静にしてください。",
        en: "Please take pain relief medication and rest.",
        zh: "请服用止痛药，保持静养。",
        pt: "Tome analgésicos e descanse.",
        vi: "Hãy uống thuốc giảm đau và nghỉ ngơi."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "仕事はどうすればいいですか？",
        en: "What should I do about work?",
        zh: "我该怎么做工作呢？",
        pt: "O que eu posso fazer no trabalho?",
        vi: "Tôi nên làm việc như thế nào?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "力仕事は避けてください。",
        en: "Please avoid heavy lifting.",
        zh: "请避免重体力劳动。",
        pt: "Evite trabalhos pesados.",
        vi: "Xin đừng làm công việc nặng."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "1か月後に再診です。悪化したらすぐ来てください。",
        en: "You have a follow-up appointment in one month. Please come right away if your condition worsens.",
        zh: "一个月后复诊。如果病情恶化，请立即来医院。",
        pt: "A consulta de retorno é em um mês. Se houver piora, venha imediatamente.",
        vi: "Một tháng sau hãy tái khám. Nếu tình trạng xấu đi, hãy đến ngay."
      }
    },
    {
      speaker: "患者",
      text: {
        jp: "手術は必要ですか？",
        en: "Is surgery necessary?",
        zh: "手术是必要的吗？",
        pt: "A cirurgia é necessária?",
        vi: "Phẫu thuật có cần thiết không?"
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "現時点では必要ありません。多くは自然に改善します。",
        en: "It is not necessary at this time. Many will improve naturally.",
        zh: "目前没有必要。大多数会自然改善。",
        pt: "Neste momento, não é necessário. A maioria melhora naturalmente.",
        vi: "Hiện tại chưa cần thiết. Nhiều trường hợp sẽ tự cải thiện."
      }
    },
    {
      speaker: "医師",
      text: {
        jp: "受付で処方箋を受け取ってください。",
        en: "Please pick up your prescription at the reception.",
        zh: "请在接待处领取处方。",
        pt: "Por favor, pegue a receita na recepção.",
        vi: "Vui lòng nhận đơn thuốc tại quầy tiếp tân."
      }
    }
  ]
},

{
  id: 10,
  title: "会計・薬",
  dialogue: [
    {
      speaker: "受付",
      text: {
        jp: "こちらが処方箋です。薬局で薬を受け取ってください。",
        en: "Here is your prescription. Please pick up your medication at the pharmacy.",
        zh: "这是处方。请到药房取药。",
        pt: "Aqui está a receita. Por favor, retire os medicamentos na farmácia.",
        vi: "Đây là đơn thuốc. Hãy nhận thuốc tại hiệu thuốc."
      }
    },

    {
      speaker: "患者",
      text: {
        jp: "ありがとうございます。",
        en: "Thank you.",
        zh: "谢谢。",
        pt: "Obrigado.",
        vi: "Cảm ơn bạn."
      }

    }
  ]
}

]

};

