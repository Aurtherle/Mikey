let  handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊${m.sender.split("@")[0]}⌉*
── • ◈ • ──

*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
         *⩥🎮│اوامر الجروب│🎮⩤*
*⟣┈┈┈┈┈┈⟢┈┈┈ـ⟣┈┈┈┈┈┈┈⟢*
*هذه الاوامر فقط للادمن*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*`
          },
          body: {
            text: '> استمتع بالبوت'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: 'اضغط',
                  sections: [
                    {
                      title: 'قسم الالعاب',
                      highlight_label: 'new',
                      rows: [
                        {
                          header: 'info',
                          title: '⌬ ❛╏',
                          description: '',
                          id: '.المطور'
                        }, 
                        {
                              header: 'العاب', 
                              title:'⌬ ❛╏زواج', 
                              description: '', 
                              id: '.زواج', 
                       }, 
                          {
                              header: 'العاب', 
                              title: '⌬ ❛╏لو', 
                              description: '', 
                              id: '.لو', 
                       }, 
                          {
                              header: 'العاب', 
                              title: '⌬ ❛╏طلاق', 
                              description: '', 
                              id: '.طلاق', 
                       }, 

                          {
                              header: 'مضاد الخاص', 
                              title: '⌬ ❛╏مضاد الخاص', 
                              description: '', 
                              id: '.افتح مضادالخاص', 
                       }, 

                          {
                              header: 'كشف', 
                              title: '⌬ ❛╏يرسل رسالة بتعديل اشياء في الجروب', 
                              description: '', 
                              id: '.كشف', 
                       }, 

                          {
                              header: 'مضاد لينكات احتياطي', 
                              title: '⌬ ❛╏مضاد لينكات لحالات الطوارئ', 
                              description: '', 
                              id: '.افتح مضاداللينكات2', 
                       }, 

                          {
                              header: 'الترحيب', 
                              title: '⌬ ❛╏يفتح ويقفل الترحيب', 
                              description: '', 
                              id: '.افتح الترحيب', 
                       }, 

                          {
                              header: 'مضاد الينكات', 
                              title: '⌬ ❛╏يطرد اي شخص يرسل رابط لجروب من الاعضاء', 
                              description: '', 
                              id: '.افتح مضادالينكات', 
                       }, 


                      ]
                    }
                  ]
                }),
                messageParamsJson:''
              }
            ]
          }
        }
      }
    }
  },{})

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['77']

export default handler
