import React from 'react'
import { AnimatedIconProps } from '@/icons/types'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CodeBlock } from './code-block';
import { CheckIcon, CopyIcon, Terminal } from 'lucide-react';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { getIconsContent } from '@/actions/get-icons-content';
const IconCard = ({ name, icon: Icon }: { name: string; icon: React.FC<AnimatedIconProps> }) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const copyFileToClipboard = async () => {
        const content = await getIconsContent(name);
        console.log(content);
        window.navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }
    return (
        <div className='bg-background flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md w-48'>
            <div className='flex items-center justify-center p-2'>
                <Tooltip>
                    <TooltipTrigger><Icon size={56} /></TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                </Tooltip>
            </div>

            <div className='flex items-center gap-2'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => copyFileToClipboard()}>
                            {isCopied ? <CheckIcon size={16} className="text-green-500" /> : <CopyIcon size={16} />}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='bg-foreground text-background ' >
                        <p>Copy {name}.tsx file</p>
                    </TooltipContent>
                </Tooltip>


                <Tooltip>
                    <TooltipTrigger asChild>
                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                            <Terminal size={16} />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='bg-foreground text-background ' >
                        <p>Copy shadcn command</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default IconCard