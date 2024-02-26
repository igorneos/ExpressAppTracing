// Importa la función useAzureMonitor y la clase AzureMonitorOpenTelemetryOptions desde el paquete @azure/monitor-opentelemetry.
import { useAzureMonitor, AzureMonitorOpenTelemetryOptions } from "@azure/monitor-opentelemetry";

// Crea un nuevo objeto AzureMonitorOpenTelemetryOptions.
const options: AzureMonitorOpenTelemetryOptions = {
  azureMonitorExporterOptions: {
    connectionString: "InstrumentationKey=f80fdbf8-6b31-412b-8231-63fad5ffb5e2;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/"
  }
};

// Habilita la integración con Azure Monitor usando la función useAzureMonitor y el objeto AzureMonitorOpenTelemetryOptions.
useAzureMonitor(options);
