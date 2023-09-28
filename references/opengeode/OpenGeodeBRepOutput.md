# class OpenGeodeBRepOutput

```cpp
Defined at ../../include/geode/model/representation/io/geode/geode_brep_output.h#36
```

```cpp
Inherits from BRepOutput
```



## Functions

### OpenGeodeBRepOutput

```cpp
public void OpenGeodeBRepOutput(string_view filename)
```

```cpp
Defined at ../../include/geode/model/representation/io/geode/geode_brep_output.h#39
```

### extension

```cpp
public string_view extension()
```

```cpp
Defined at ../../include/geode/model/representation/io/geode/geode_brep_output.h#44
```

### archive_brep_files

```cpp
public void archive_brep_files(const ZipFile & zip_writer)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/io/geode/geode_brep_output.cpp#35
```

### save_brep_files

```cpp
public void save_brep_files(const BRep & brep, string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/io/geode/geode_brep_output.cpp#45
```

### write

```cpp
public void write(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/io/geode/geode_brep_output.cpp#69
```



