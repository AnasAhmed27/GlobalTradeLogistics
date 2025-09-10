import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Package, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Truck, 
  Ship, 
  Plane,
  AlertTriangle,
  Info
} from "lucide-react";
import type { Shipment } from "@shared/schema";

const statusIcons = {
  "Delivered": CheckCircle,
  "In Transit": Truck,
  "Customs Clearance": AlertTriangle,
  "Processing": Package,
  "Shipped": Ship
};

const statusColors = {
  "Delivered": "bg-green-500",
  "In Transit": "bg-blue-500", 
  "Customs Clearance": "bg-yellow-500",
  "Processing": "bg-gray-500",
  "Shipped": "bg-primary"
};

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);

  const { data: shipment, isLoading, error } = useQuery<Shipment>({
    queryKey: ['/api/shipments/track', trackingNumber],
    enabled: !!trackingNumber && searchAttempted,
    retry: false
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setSearchAttempted(true);
    }
  };

  const StatusIcon = shipment ? statusIcons[shipment.status as keyof typeof statusIcons] || Package : Package;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Track Your <span className="text-primary">Shipment</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Enter your tracking number below to get real-time updates on your shipment's location and status.
            </p>

            {/* Tracking Form */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., GLS001234567)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                  data-testid="input-tracking-number"
                />
                <Button type="submit" disabled={!trackingNumber.trim()} data-testid="button-track">
                  <Search className="h-4 w-4 mr-2" />
                  Track
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && searchAttempted && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Searching for your shipment...</p>
            </div>
          )}

          {error && searchAttempted && (
            <Alert className="mb-8" data-testid="alert-error">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                No shipment found with tracking number "{trackingNumber}". Please check the number and try again.
              </AlertDescription>
            </Alert>
          )}

          {shipment && (
            <div className="space-y-8" data-testid="shipment-details">
              {/* Shipment Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Tracking Number: {shipment.trackingNumber}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {shipment.origin} → {shipment.destination}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${statusColors[shipment.status as keyof typeof statusColors]} text-white text-lg px-4 py-2`}
                    >
                      <StatusIcon className="h-5 w-5 mr-2" />
                      {shipment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Current Location</p>
                        <p className="text-gray-600 dark:text-gray-300">{shipment.currentLocation}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Estimated Delivery</p>
                        <p className="text-gray-600 dark:text-gray-300">{shipment.estimatedDelivery}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Package className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Last Update</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {new Date(shipment.lastUpdate!).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipment Timeline</CardTitle>
                  <CardDescription>Track your shipment's journey from origin to destination</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Timeline items based on status */}
                    {shipment.status === "Delivered" && (
                      <>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">Delivered</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Package delivered to {shipment.destination}
                            </p>
                            <p className="text-xs text-gray-500">{new Date(shipment.lastUpdate!).toLocaleString()}</p>
                          </div>
                        </div>
                        <Separator />
                      </>
                    )}

                    {(shipment.status === "In Transit" || shipment.status === "Delivered") && (
                      <>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <Truck className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">In Transit</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Package is on its way to destination
                            </p>
                            <p className="text-xs text-gray-500">Current location: {shipment.currentLocation}</p>
                          </div>
                        </div>
                        <Separator />
                      </>
                    )}

                    {shipment.status === "Customs Clearance" && (
                      <>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                              <AlertTriangle className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">Customs Clearance</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Package is undergoing customs inspection
                            </p>
                            <p className="text-xs text-gray-500">Location: {shipment.currentLocation}</p>
                          </div>
                        </div>
                        <Separator />
                      </>
                    )}

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Ship className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">Shipped</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Package departed from {shipment.origin}
                        </p>
                        <p className="text-xs text-gray-500">Origin: {shipment.origin}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">Contact Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        If you have questions about your shipment, our support team is here to help.
                      </p>
                      <Button variant="outline" size="sm" data-testid="button-contact-support">
                        Contact Support
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">Delivery Instructions</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Ensure someone is available to receive the package at the delivery address. 
                        Valid ID may be required for high-value shipments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Sample Tracking Numbers */}
          {!searchAttempted && (
            <div className="mt-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-primary" />
                    Try Our Demo
                  </CardTitle>
                  <CardDescription>
                    Test the tracking system with these sample tracking numbers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {setTrackingNumber("GLS001234567"); setSearchAttempted(false);}}
                      className="text-left justify-start"
                      data-testid="sample-tracking-1"
                    >
                      <div>
                        <div className="font-medium">GLS001234567</div>
                        <div className="text-xs text-gray-500">In Transit</div>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {setTrackingNumber("GLS007890123"); setSearchAttempted(false);}}
                      className="text-left justify-start"
                      data-testid="sample-tracking-2"
                    >
                      <div>
                        <div className="font-medium">GLS007890123</div>
                        <div className="text-xs text-gray-500">Delivered</div>
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {setTrackingNumber("GLS004567890"); setSearchAttempted(false);}}
                      className="text-left justify-start"
                      data-testid="sample-tracking-3"
                    >
                      <div>
                        <div className="font-medium">GLS004567890</div>
                        <div className="text-xs text-gray-500">Customs Clearance</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Tracking Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Tracking Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay informed every step of the way with our comprehensive tracking system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Real-Time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get instant notifications when your shipment status changes, with precise location tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Delivery Estimates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accurate delivery time predictions based on real traffic and customs data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proof of Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital signatures and photo confirmation for complete delivery verification.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}