<template>
	<div class="bg-gray-100">
		<navigation />
		<container class="py-8">
			<div class="grid grid-cols-12 gap-8">
				<nuxt
					class="bg-white col-span-8 flex flex-col items-start p-8 rounded-md shadow space-y-4"
				/>
				<aside
					class="bg-white col-span-4 flex flex-col mb-auto p-8 rounded-md shadow space-y-4"
				>
					<span class="font-bold text-2xl"
						>Subscribe to our newsletter</span
					>
					<form @submit.prevent class="flex flex-col space-y-2">
						<input
							class="border px-4 py-2 rounded"
							type="email"
							placeholder="Email"
						/>
						<button class="btn btn--primary" type="submit">
							Subscribe
						</button>
					</form>
				</aside>
			</div>
		</container>
		<web-footer />
	</div>
</template>
