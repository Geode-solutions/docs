<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# namespace geode



## Namespaces

* [internal](internal/index.md)


## Records

* [GeodeViewablesConversionException](GeodeViewablesConversionException.md)
* [GeodeViewablesConversionLibrary](GeodeViewablesConversionLibrary.md)
* [GeodeViewablesException](GeodeViewablesException.md)
* [GeodeViewablesQEMProxyException](GeodeViewablesQEMProxyException.md)
* [GeodeViewablesQEMProxyLibrary](GeodeViewablesQEMProxyLibrary.md)


## Functions

### simplify

```cpp
bool simplify(geode::TriangulatedSurface3D & mesh)
```


### save_viewable_brep

```cpp
std::string save_viewable_brep(const BRep & brep, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_section

```cpp
std::string save_viewable_section(const Section & section, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_cross_section

```cpp
std::string save_viewable_cross_section(const CrossSection & cross_section, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_structural_model

```cpp
std::string save_viewable_structural_model(const StructuralModel & structural_model, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_implicit_cross_section

```cpp
std::string save_viewable_implicit_cross_section(const ImplicitCrossSection & implicit_cross_section, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_implicit_structural_model

```cpp
std::string save_viewable_implicit_structural_model(const ImplicitStructuralModel & implicit_structural_model, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_point_set

```cpp
std::string save_viewable_point_set(const PointSet<dimension> & point_set, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_edged_curve

```cpp
std::string save_viewable_edged_curve(const EdgedCurve<dimension> & edged_curve, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_hybrid_solid

```cpp
std::string save_viewable_hybrid_solid(const HybridSolid<dimension> & hybrid_solid, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_light_regular_grid

```cpp
std::string save_viewable_light_regular_grid(const LightRegularGrid<dimension> & grid, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_polygonal_surface

```cpp
std::string save_viewable_polygonal_surface(const PolygonalSurface<dimension> & polygonal_surface, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_polyhedral_solid

```cpp
std::string save_viewable_polyhedral_solid(const PolyhedralSolid<dimension> & polyhedral_solid, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_raster_image

```cpp
std::string save_viewable_raster_image(const RasterImage<dimension> & raster_image, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_regular_grid

```cpp
std::string save_viewable_regular_grid(const RegularGrid<dimension> & regular_grid, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_tetrahedral_solid

```cpp
std::string save_viewable_tetrahedral_solid(const TetrahedralSolid<dimension> & tetrahedral_solid, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### save_viewable_triangulated_surface

```cpp
std::string save_viewable_triangulated_surface(const TriangulatedSurface<dimension> & triangulated_surface, std::string_view filename_without_extension)
```


 Save the Data in viewable file format (e.g. VTK format)

**return** the name of th newly created file

### brep_viewable_extension

```cpp
std::string_view brep_viewable_extension()
```


### section_viewable_extension

```cpp
std::string_view section_viewable_extension()
```


### cross_section_viewable_extension

```cpp
std::string_view cross_section_viewable_extension()
```


### point_set_viewable_extension

```cpp
std::string_view point_set_viewable_extension()
```


### structural_model_viewable_extension

```cpp
std::string_view structural_model_viewable_extension()
```


### save_light_viewable_brep

```cpp
std::string save_light_viewable_brep(const BRep & brep, std::string_view filename_without_extension)
```


### edged_curve_viewable_extension

```cpp
std::string_view edged_curve_viewable_extension()
```


### hybrid_solid_viewable_extension

```cpp
std::string_view hybrid_solid_viewable_extension()
```


### implicit_cross_section_viewable_extension

```cpp
std::string_view implicit_cross_section_viewable_extension()
```


### implicit_structural_model_viewable_extension

```cpp
std::string_view implicit_structural_model_viewable_extension()
```


### light_regular_grid_viewable_extension

```cpp
std::string_view light_regular_grid_viewable_extension()
```


### polygonal_surface_viewable_extension

```cpp
std::string_view polygonal_surface_viewable_extension()
```


### polyhedral_solid_viewable_extension

```cpp
std::string_view polyhedral_solid_viewable_extension()
```


### raster_image_viewable_extension

```cpp
std::string_view raster_image_viewable_extension()
```


### regular_grid_viewable_extension

```cpp
std::string_view regular_grid_viewable_extension()
```


### tetrahedral_solid_viewable_extension

```cpp
std::string_view tetrahedral_solid_viewable_extension()
```


### triangulated_surface_viewable_extension

```cpp
std::string_view triangulated_surface_viewable_extension()
```


### save_light_viewable_section

```cpp
std::string save_light_viewable_section(const Section & section, std::string_view filename_without_extension)
```


### save_light_viewable_cross_section

```cpp
std::string save_light_viewable_cross_section(const CrossSection & cross_section, std::string_view filename_without_extension)
```


### save_light_viewable_structural_model

```cpp
std::string save_light_viewable_structural_model(const StructuralModel & structural_model, std::string_view filename_without_extension)
```


### save_light_viewable_point_set

```cpp
std::string save_light_viewable_point_set(const PointSet<dimension> & point_set, std::string_view filename_without_extension)
```


### save_light_viewable_implicit_cross_section

```cpp
std::string save_light_viewable_implicit_cross_section(const ImplicitCrossSection & implicit_cross_section, std::string_view filename_without_extension)
```


### save_light_viewable_implicit_structural_model

```cpp
std::string save_light_viewable_implicit_structural_model(const ImplicitStructuralModel & implicit_structural_model, std::string_view filename_without_extension)
```


### save_light_viewable_edged_curve

```cpp
std::string save_light_viewable_edged_curve(const EdgedCurve<dimension> & edged_curve, std::string_view filename_without_extension)
```


### save_light_viewable_hybrid_solid

```cpp
std::string save_light_viewable_hybrid_solid(const HybridSolid<dimension> & hybrid_solid, std::string_view filename_without_extension)
```


### save_light_viewable_light_regular_grid

```cpp
std::string save_light_viewable_light_regular_grid(const LightRegularGrid<dimension> & grid, std::string_view filename_without_extension)
```


### save_light_viewable_polygonal_surface

```cpp
std::string save_light_viewable_polygonal_surface(const PolygonalSurface<dimension> & polygonal_surface, std::string_view filename_without_extension)
```


### save_light_viewable_polyhedral_solid

```cpp
std::string save_light_viewable_polyhedral_solid(const PolyhedralSolid<dimension> & polyhedral_solid, std::string_view filename_without_extension)
```


### save_light_viewable_raster_image

```cpp
std::string save_light_viewable_raster_image(const RasterImage<dimension> & raster_image, std::string_view filename_without_extension)
```


### save_light_viewable_regular_grid

```cpp
std::string save_light_viewable_regular_grid(const RegularGrid<dimension> & regular_grid, std::string_view filename_without_extension)
```


### save_light_viewable_tetrahedral_solid

```cpp
std::string save_light_viewable_tetrahedral_solid(const TetrahedralSolid<dimension> & tetrahedral_solid, std::string_view filename_without_extension)
```


### save_light_viewable_triangulated_surface

```cpp
std::string save_light_viewable_triangulated_surface(const TriangulatedSurface<dimension> & triangulated_surface, std::string_view filename_without_extension)
```




