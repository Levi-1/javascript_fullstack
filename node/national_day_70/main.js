const program = require('commander')

const mergeAction = (options) => {

    Console.log(options);
}
program.command('merge')// merge功能
    .description('合并图片')
    .option('-b,--background <background image>','背景图片')
    .option('-f,--flag<flag image>','国旗图片')
    .option('-t, --target <target image name>','合成图片')
    .action(mergeAction)

program.parse(process.argv);