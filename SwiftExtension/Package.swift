// swift-tools-version:4.0
// The swift-tools-version declares the minimum version of Swift required to build this package.
import PackageDescription

let package = Package(
    name: "SwiftExtension",
    products: [
        .library(
            name: "SwiftExtension",
            type: .dynamic,
            targets: ["SwiftExtension"]),
    ],
    dependencies: [],
    targets: [
        .target(
            name: "SwiftExtension",
            dependencies: [])
    ]
)