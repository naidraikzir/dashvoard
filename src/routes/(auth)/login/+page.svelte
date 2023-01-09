<script>
	import IconoirUser from '~icons/iconoir/user'
	import IconoirLock from '~icons/iconoir/lock'
	import { Label, Input, InputAddon, ButtonGroup, Card, Button } from 'flowbite-svelte'
	import Themer from '$lib/components/Themer.svelte'
</script>

<div
	class="flex items-center justify-center h-screen px-4 bg-white dark:bg-gray-900 dark:text-white"
>
	<div class="fixed top-0 inset-x-0 flex justify-end">
		<Themer />
	</div>

	<form action="/" class="flex-1" method="POST">
		<Card class="mx-auto gap-4">
			<div>
				<Label for="username" class="block mb-2">Username</Label>
				<ButtonGroup class="w-full">
					<InputAddon>
						<IconoirUser />
					</InputAddon>
					<Input id="username" placeholder="Username" name="username" required />
				</ButtonGroup>
			</div>

			<div>
				<Label for="password" class="block mb-2">Password</Label>
				<ButtonGroup class="w-full">
					<InputAddon>
						<IconoirLock />
					</InputAddon>
					<Input type="password" id="password" placeholder="Password" name="password" required />
				</ButtonGroup>
			</div>

			<div class="mt-4">
				<Button type="submit" aria-label="login button">Login</Button>
			</div>
		</Card>
	</form>
</div>
