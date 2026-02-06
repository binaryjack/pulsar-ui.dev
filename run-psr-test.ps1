# PSR Test Runner - Proves PSR works end-to-end

Write-Host "PSR Test Suite - Proving PSR Works!" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build pulsar.dev if needed
Write-Host "Step 1: Checking pulsar.dev build..." -ForegroundColor Yellow
$pulsarDevDist = "..\pulsar.dev\dist\index.js"
if (-Not (Test-Path $pulsarDevDist)) {
    Write-Host "   Building pulsar.dev..." -ForegroundColor Gray
    Push-Location ..\pulsar.dev
    pnpm build
    Pop-Location
    Write-Host "   pulsar.dev built" -ForegroundColor Green
} else {
    Write-Host "   pulsar.dev already built" -ForegroundColor Green
}

# Step 2: Build pulsar-transformer if needed
Write-Host ""
Write-Host "Step 2: Checking pulsar-transformer build..." -ForegroundColor Yellow
$transformerDist = "..\pulsar-transformer\dist\pipeline\create-pipeline.js"
if (-Not (Test-Path $transformerDist)) {
    Write-Host "   Building pulsar-transformer..." -ForegroundColor Gray
    Push-Location ..\pulsar-transformer
    pnpm build
    Pop-Location
    Write-Host "   pulsar-transformer built" -ForegroundColor Green
} else {
    Write-Host "   pulsar-transformer already built" -ForegroundColor Green
}

# Step 3: Transform PSR files
Write-Host ""
Write-Host "Step 3: Transforming PSR to JavaScript..." -ForegroundColor Yellow
node test-psr-runner.mjs

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Transformation failed! Check errors above." -ForegroundColor Red
    exit 1
}

# Step 4: Start dev server
Write-Host ""
Write-Host "Step 4: Starting dev server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "PSR TEST SUITE READY!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Open in browser:" -ForegroundColor Yellow
Write-Host "http://localhost:5173/test-psr.html" -ForegroundColor White
Write-Host ""
Write-Host "What you should see:" -ForegroundColor Green
Write-Host "- Test navigation UI" -ForegroundColor White
Write-Host "- Interactive test controls" -ForegroundColor White
Write-Host "- RenderCapture validation status" -ForegroundColor White
Write-Host ""
Write-Host "THIS IS THE MOMENT OF TRUTH!" -ForegroundColor Magenta
Write-Host ""
Write-Host "Starting dev server..." -ForegroundColor Gray
Write-Host ""

pnpm dev
