<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $modName = $_POST["modName"];
    $modVersion = $_POST["modVersion"];
    $modDescription = $_POST["modDescription"];
    $modFile = $_FILES["modFile"];

    $allowedExtensions = array("zip", "rar", "tar", "7z", "js", "mod");
    $fileExtension = strtolower(pathinfo($modFile["name"], PATHINFO_EXTENSION));

    if (!in_array($fileExtension, $allowedExtensions)) {
        echo "Invalid file type. Only zip, rar, tar, 7z, js, and mod files are allowed.";
        exit();
    }

    $targetDirectory = "mods/";
    $targetFileName = $modName . "_" . $modVersion . "." . $fileExtension; // Генерируем уникальное имя файла
    $targetFilePath = $targetDirectory . $targetFileName;

    if (move_uploaded_file($modFile["tmp_name"], $targetFilePath)) {
        // Successfully moved the uploaded file to the target directory

        // Add mod information to mods.json
        $modsData = json_decode(file_get_contents("mods.json"), true);
        $newMod = array(
            "name" => $modName,
            "version" => $modVersion,
            "description" => $modDescription,
            "file" => $targetFileName // Сохраняем только имя файла, без пути
        );
        $modsData[] = $newMod;
        file_put_contents("mods.json", json_encode($modsData, JSON_PRETTY_PRINT));

        echo "Mod added successfully!";
    } else {
        echo "Error uploading mod.";
    }
}
?>

