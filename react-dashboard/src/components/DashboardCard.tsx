import { Box, BoxProps, Flex, Heading, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface DashboardCardProps extends BoxProps {
  children: ReactNode
  title?: string
  icon?: IconType
  variant?: 'solid' | 'outline'
}

export const DashboardCard = ({ 
  children, 
  title, 
  icon, 
  variant = 'solid',
  ...props 
}: DashboardCardProps) => {
  return (
    <Box
      bg={variant === 'solid' ? 'white' : 'transparent'}
      borderRadius="xl"
      boxShadow={variant === 'solid' ? 'md' : 'none'}
      borderWidth={variant === 'outline' ? '1px' : '0'}
      borderColor="gray.200"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: variant === 'solid' ? 'lg' : 'sm'
      }}
      {...props}
    >
      {(title || icon) && (
        <Flex align="center" gap={3} mb={4}>
          {icon && (
            <Icon
              as={icon}
              boxSize={6}
              color="blue.500"
            />
          )}
          {title && (
            <Heading size="md" fontWeight="semibold">
              {title}
            </Heading>
          )}
        </Flex>
      )}
      {children}
    </Box>
  )
}