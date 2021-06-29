<script>
	const title= 'Instantly secure your website with Security Headers and Layer0'
	const description= 'A demo that shows how to secure your website against some common attacks like XSS, code injection, clickjacking, etc.'
	const url = process.env.NODE_ENV=='production' ? 'https://rishi-raj-jain-security-headers-example-default.layer0.link' : 'http://localhost:3000'
	const image = process.env.NODE_ENV=='production' ? 'https://rishi-raj-jain-security-headers-example-default.layer0.link/cover.png' : 'http://localhost:3000/cover.png'
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="title" name="title" content={title}>
	<meta property="description" name="description" content={description}>
	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
	<meta name="og:url" property="og:url" content={url} />
	<meta name="og:title" property="og:title" content={title} />
	<meta name="og:description" property="og:description" content={description} />
	<meta name="og:image" property="og:image" content={image} />
	<meta property="og:locale" content="en_IN" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@rishi_raj_jain_" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:url" property="twitter:url" content={url} />
</svelte:head>

<h1 class="pt-5 fw-bold">
	{title}
</h1>
<h4 class="pt-3">
	This is demo that shows how to secure your website against some common attacks like XSS, code injection, clickjacking, etc. with <a rel="noopener noreferrer" target="_blank" href="https://layer0.co?ref=rishi-raj-jain">Layer0</a>.
</h4>
