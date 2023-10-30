class AnalyticsService {
	sendAnalytics(type: string, payload: any, timestamp: number = (Date.now() / 1000)) {
		console.log(type, payload, timestamp);
		fetch('/api/sendEvent', {
			method: 'POST',
			body: JSON.stringify({
				type,
				payload,
				timestamp
			})
		});
	}
}

export const analyticsService = new AnalyticsService();