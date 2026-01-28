Get-ChildItem -Recurse -Filter "*.tsx" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $updated = $content -replace 'from [''"]\.\.\/\.\.\/\.\.\/\.\.\/src\/components\/', "from '../../../components/"
    $updated = $updated -replace 'from [''"]\.\.\/\.\.\/components\/', "from '../../showcase-components/"
    [System.IO.File]::WriteAllText($_.FullName, $updated)
    Write-Host "Updated: $($_.Name)"
}
Write-Host "All imports fixed!"
