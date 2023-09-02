<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $pluginName = $_POST["pluginName"];
    $pluginVersion = $_POST["pluginVersion"];
    $pluginCoreVersion = $_POST["pluginCoreVersion"];
    $pluginDescription = $_POST["pluginDescription"];
    $pluginFile = $_FILES["pluginFile"];

    $allowedExtensions = array("zip", "rar", "tar", "7z", "php", "phar");
    $fileExtension = strtolower(pathinfo($pluginFile["name"], PATHINFO_EXTENSION));

    if (!in_array($fileExtension, $allowedExtensions)) {
        echo "Invalid file type. Only zip, rar, tar, 7z, php, and phar files are allowed.";
        exit();
    }

    $targetDirectory = "plugins/";
    $targetFileName = $pluginName . "_" . $pluginVersion . "." . $fileExtension; // Генерируем уникальное имя файла
    $targetFilePath = $targetDirectory . $targetFileName;

    if (move_uploaded_file($pluginFile["tmp_name"], $targetFilePath)) {
        // Successfully moved the uploaded file to the target directory

        // Add plugin information to mods.json
        $pluginsData = json_decode(file_get_contents("plugins.json"), true);
        $newPlugin = array(
            "name" => $pluginName,
            "version" => $pluginVersion,
            "coreVersion" => $pluginCoreVersion,
            "description" => $pluginDescription,
            "file" => $targetFileName // Сохраняем только имя файла, без пути
        );
        $pluginsData[] = $newPlugin;
        file_put_contents("plugins.json", json_encode($pluginsData, JSON_PRETTY_PRINT));

        echo "Plugin added successfully!";
    } else {
        echo "Error uploading plugin.";
    }
}
?>

