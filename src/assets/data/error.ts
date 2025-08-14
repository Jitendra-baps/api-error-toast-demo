export const ERROR_MESSAGES: Record<number, { code: number, header: string; summary: string; resolutionSteps: string }> = {
    400: {
        "code": 400,
        "header": "Bad Request",
        "summary": "The request cannot be fulfilled due to malformed syntax.",
        "resolutionSteps": "<ol><li>Check the request syntax.</li><li>Ensure parameters and formatting are correct.</li><li>Refer to API documentation for proper structure.</li></ol>"
    },
    401: {
        "code": 401,
        "header": "Unauthorized",
        "summary": "Authentication is required and has failed or has not yet been provided.",
        "resolutionSteps": "<ol><li>Include valid authentication credentials.</li><li>Check authorization headers.</li><li>Ensure token or credentials are valid and not expired.</li></ol>"
    },
    402: {
        "code": 402,
        "header": "Payment Required",
        "summary": "Reserved for future use; sometimes used to indicate payment or quota issues.",
        "resolutionSteps": "<ol><li>Check account status or payment requirements.</li><li>Ensure any billing or quota limits are not exceeded.</li><li>Review API provider documentation.</li></ol>"
    },
    403: {
        "code": 403,
        "header": "Forbidden",
        "summary": "The server understood the request but refuses to authorize it.",
        "resolutionSteps": "<ol><li>Ensure proper permissions for this resource.</li><li>Check user role/access rights.</li><li>Avoid repeating the request if credentials are insufficient.</li></ol>"
    },
    404: {
        "code": 404,
        "header": "Not Found",
        "summary": "The requested resource could not be found but may be available again in the future.",
        "resolutionSteps": "<ol><li>Check the URL or resource path.</li><li>Verify that the resource ID exists.</li><li>Ensure the API base URL and endpoint are correct.</li></ol>"
    },
    405: {
        "code": 405,
        "header": "Method Not Allowed",
        "summary": "The request method is not supported for the requested resource.",
        "resolutionSteps": "<ol><li>Ensure you’re using the correct HTTP method (GET, POST, etc.).</li><li>Check the 'Allow' response header for permitted methods.</li><li>Refer to API documentation.</li></ol>"
    },
    406: {
        "code": 406,
        "header": "Not Acceptable",
        "summary": "The server cannot generate a response matching the 'Accept' headers sent by the client.",
        "resolutionSteps": "<ol><li>Check and adjust the 'Accept' header values.</li><li>Request supported content types (e.g., application/json).</li><li>Refer to API docs for acceptable formats.</li></ol>"
    },
    407: {
        "code": 407,
        "header": "Proxy Authentication Required",
        "summary": "The client must first authenticate with the proxy.",
        "resolutionSteps": "<ol><li>Provide valid proxy authentication.</li><li>Ensure correct proxy credentials are included.</li><li>Check proxy settings and access permissions.</li></ol>"
    },
    408: {
        "code": 408,
        "header": "Request Timeout",
        "summary": "The server timed out waiting for the request.",
        "resolutionSteps": "<ol><li>Retry the request.</li><li>Check network connectivity or server performance.</li><li>Consider increasing timeout settings.</li></ol>"
    },
    409: {
        "code": 409,
        "header": "Conflict",
        "summary": "The request could not be completed due to a conflict with the current state of the resource.",
        "resolutionSteps": "<ol><li>Resolve version or resource conflicts.</li><li>Verify your request state aligns with resource state.</li><li>Ensure no conflicting updates are in progress.</li></ol>"
    },
    410: {
        "code": 410,
        "header": "Gone",
        "summary": "The resource is no longer available and will not be available again.",
        "resolutionSteps": "<ol><li>Stop requesting this resource.</li><li>Update to a current or alternative resource if available.</li><li>Review API updates or deprecation notices.</li></ol>"
    },
    422: {
        "code": 422,
        "header": "Unprocessable Entity",
        "summary": "The request was well-formed but contains semantic errors preventing processing.",
        "resolutionSteps": "<ol><li>Check request payload for logical or validation errors.</li><li>Correct field values or constraints.</li><li>Refer to API schema documentation.</li></ol>"
    },
    500: {
        "code": 500,
        "header": "Internal Server Error",
        "summary": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
        "resolutionSteps": "<ol><li>Contact server or API support.</li><li>Check server-side logs for error details.</li><li>Retry after some time or report issue with debugging info.</li></ol>"
    },
    501: {
        "code": 501,
        "header": "Not Implemented",
        "summary": "The server does not support the functionality required to fulfill the request.",
        "resolutionSteps": "<ol><li>Check if endpoint or method is supported.</li><li>Refer to documentation for supported features.</li><li>Update API or server implementation if necessary.</li></ol>"
    },
    502: {
        "code": 502,
        "header": "Bad Gateway",
        "summary": "The server, while acting as gateway or proxy, received an invalid response from the upstream server.",
        "resolutionSteps": "<ol><li>Check upstream server availability.</li><li>Inspect proxy or load balancer configs.</li><li>Retry after resolving upstream issues.</li></ol>"
    },
    503: {
        "code": 503,
        "header": "Service Unavailable",
        "summary": "The server is currently unable to handle the request, often due to temporary overload or maintenance.",
        "resolutionSteps": "<ol><li>Retry after some time.</li><li>Check server load or maintenance windows.</li><li>Implement retry logic with backoff.</li></ol>"
    },
    504: {
        "code": 504,
        "header": "Gateway Timeout",
        "summary": "The server, while acting as gateway or proxy, did not receive a timely response from the upstream server.",
        "resolutionSteps": "<ol><li>Optimize upstream performance.</li><li>Increase timeout thresholds.</li><li>Ensure connectivity between services.</li></ol>"
    },
    505: {
        "code": 505,
        "header": "HTTP Version Not Supported",
        "summary": "The server does not support the HTTP protocol version used in the request.",
        "resolutionSteps": "<ol><li>Use a supported HTTP version (e.g. HTTP/1.1 or HTTP/2).</li><li>Update request protocol version.</li><li>Check API specs for supported versions.</li></ol>"
    },
    507: {
        "code": 507,
        "header": "Insufficient Storage",
        "summary": "The method could not be performed because the server is unable to store the representation needed to complete the request.",
        "resolutionSteps": "<ol><li>Free up server storage.</li><li>Increase storage quota.</li><li>Optimize resource usage.</li></ol>"
    },
    508: {
        "code": 508,
        "header": "Loop Detected",
        "summary": "The server detected an infinite loop while processing the request.",
        "resolutionSteps": "<ol><li>Review request redirection or resource dependency chains.</li><li>Break cyclic references.</li><li>Fix configuration or application logic.</li></ol>"
    },
    510: {
        "code": 510,
        "header": "Not Extended",
        "summary": "Further extensions to the request are required for the server to fulfill it.",
        "resolutionSteps": "<ol><li>Provide required extension information.</li><li>Include necessary headers or protocol extensions.</li><li>Review API documentation for extension requirements.</li></ol>"
    },
    511: {
        "code": 511,
        "header": "Network Authentication Required",
        "summary": "The client needs to authenticate to gain network access.",
        "resolutionSteps": "<ol><li>Authenticate with the network (e.g., captive portal login).</li><li>Ensure proper network credentials are provided.</li><li>Check network access policies.</li></ol>"
    }
}