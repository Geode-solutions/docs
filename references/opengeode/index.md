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

* [detail](detail/index.md)
* [internal](internal/index.md)


## Records

* [AABBTree](AABBTree.md)
* [Angle](Angle.md)
* [AnisotropicDistanceToEdge](AnisotropicDistanceToEdge.md)
* [AnisotropicDistanceToTetrahedron](AnisotropicDistanceToTetrahedron.md)
* [AnisotropicDistanceToTriangle](AnisotropicDistanceToTriangle.md)
* [AttributeBase](AttributeBase.md)
* [AttributeCoordinateReferenceSystem](AttributeCoordinateReferenceSystem.md)
* [AttributeLinearInterpolationImpl](AttributeLinearInterpolationImpl.md)
* [AttributeLinearInterpolation](AttributeLinearInterpolation.md)
* [AttributeManager](AttributeManager.md)
* [AttributeProperties](AttributeProperties.md)
* [BRepBuilder](BRepBuilder.md)
* [BRepComponentMeshEdges](BRepComponentMeshEdges.md)
* [BRepComponentMeshPolygons](BRepComponentMeshPolygons.md)
* [BRepInput](BRepInput.md)
* [BRepMappings](BRepMappings.md)
* [BRepMeshesElementMapping](BRepMeshesElementMapping.md)
* [BRepMeshesVertexMapping](BRepMeshesVertexMapping.md)
* [BRepOutput](BRepOutput.md)
* [BRep](BRep.md)
* [BaseRange](BaseRange.md)
* [BijectiveMapping](BijectiveMapping.md)
* [BitseryExtensions](BitseryExtensions.md)
* [BlockCollection](BlockCollection.md)
* [BlockCollectionsBuilder](BlockCollectionsBuilder.md)
* [BlockCollections](BlockCollections.md)
* [BlockDefinition](BlockDefinition.md)
* [BlockPolyhedraFacetVertices](BlockPolyhedraFacetVertices.md)
* [BlockPolyhedronFacet](BlockPolyhedronFacet.md)
* [Block](Block.md)
* [BlocksBuilder](BlocksBuilder.md)
* [Blocks](Blocks.md)
* [BoundaryDefinition](BoundaryDefinition.md)
* [BoundingBox](BoundingBox.md)
* [CRSTag](CRSTag.md)
* [CachedValue](CachedValue.md)
* [CellArray](CellArray.md)
* [Chronometer](Chronometer.md)
* [Circle](Circle.md)
* [ComponentID](ComponentID.md)
* [ComponentMeshElement](ComponentMeshElement.md)
* [ComponentMeshVertex](ComponentMeshVertex.md)
* [ComponentRegistryBuilder](ComponentRegistryBuilder.md)
* [ComponentRegistry](ComponentRegistry.md)
* [ComponentTag](ComponentTag.md)
* [Component](Component.md)
* [ConsoleLoggerClient](ConsoleLoggerClient.md)
* [ConsoleProgressLoggerClient](ConsoleProgressLoggerClient.md)
* [ConstantAttribute](ConstantAttribute.md)
* [CoordinateReferenceSystemManagerBuilder](CoordinateReferenceSystemManagerBuilder.md)
* [CoordinateReferenceSystemManager](CoordinateReferenceSystemManager.md)
* [CoordinateReferenceSystemManagersBuilder](CoordinateReferenceSystemManagersBuilder.md)
* [CoordinateReferenceSystemManagers](CoordinateReferenceSystemManagers.md)
* [CoordinateReferenceSystem](CoordinateReferenceSystem.md)
* [CoordinateSystem](CoordinateSystem.md)
* [CornerCollection](CornerCollection.md)
* [CornerCollectionsBuilder](CornerCollectionsBuilder.md)
* [CornerCollections](CornerCollections.md)
* [CornerDefinition](CornerDefinition.md)
* [Corner](Corner.md)
* [CornersBuilder](CornersBuilder.md)
* [Corners](Corners.md)
* [CorrectnessInfo](CorrectnessInfo.md)
* [Cylinder](Cylinder.md)
* [DecrementOperator](DecrementOperator.md)
* [DistanceToEdge](DistanceToEdge.md)
* [DistanceToTetrahedron](DistanceToTetrahedron.md)
* [DistanceToTriangle](DistanceToTriangle.md)
* [DynamicNNSearch](DynamicNNSearch.md)
* [EdgeVertex](EdgeVertex.md)
* [EdgedCurveBuilder](EdgedCurveBuilder.md)
* [EdgedCurveInput](EdgedCurveInput.md)
* [EdgedCurveOutput](EdgedCurveOutput.md)
* [EdgedCurve](EdgedCurve.md)
* [Ellipse](Ellipse.md)
* [EraserRange](EraserRange.md)
* [EuclideanDistanceTransform](EuclideanDistanceTransform.md)
* [Factory](Factory.md)
* [FrameTransform](FrameTransform.md)
* [Frame](Frame.md)
* [GenericAttributeConversion](GenericAttributeConversion.md)
* [GenericCircle](GenericCircle.md)
* [GenericEllipse](GenericEllipse.md)
* [GenericLine](GenericLine.md)
* [GenericMapping](GenericMapping.md)
* [GenericMeshAABB](GenericMeshAABB.md)
* [GenericMeshAccessor](GenericMeshAccessor.md)
* [GenericPlane](GenericPlane.md)
* [GenericPolygon](GenericPolygon.md)
* [GenericSegment](GenericSegment.md)
* [GenericSphere](GenericSphere.md)
* [GenericTetrahedron](GenericTetrahedron.md)
* [GenericTriangle](GenericTriangle.md)
* [GraphBuilder](GraphBuilder.md)
* [GraphInput](GraphInput.md)
* [GraphOutput](GraphOutput.md)
* [Graph](Graph.md)
* [GreyscaleColor](GreyscaleColor.md)
* [GridBuilder](GridBuilder.md)
* [GridPointFunction](GridPointFunction.md)
* [GridScalarFunction](GridScalarFunction.md)
* [Grid](Grid.md)
* [Growable](Growable.md)
* [HybridSolidBuilder](HybridSolidBuilder.md)
* [HybridSolidInput](HybridSolidInput.md)
* [HybridSolidOutput](HybridSolidOutput.md)
* [HybridSolid](HybridSolid.md)
* [IOFile](IOFile.md)
* [IdentifierBuilder](IdentifierBuilder.md)
* [Identifier](Identifier.md)
* [IncrementOperator](IncrementOperator.md)
* [InfiniteLine](InfiniteLine.md)
* [Input](Input.md)
* [IntersectionResult](IntersectionResult.md)
* [Library](Library.md)
* [LightRegularGridInput](LightRegularGridInput.md)
* [LightRegularGridOutput](LightRegularGridOutput.md)
* [LightRegularGrid](LightRegularGrid.md)
* [LineCollection](LineCollection.md)
* [LineCollectionsBuilder](LineCollectionsBuilder.md)
* [LineCollections](LineCollections.md)
* [LineDefinition](LineDefinition.md)
* [Line](Line.md)
* [LinesBuilder](LinesBuilder.md)
* [Lines](Lines.md)
* [LoggerClient](LoggerClient.md)
* [LoggerManager](LoggerManager.md)
* [Logger](Logger.md)
* [MappingBase](MappingBase.md)
* [MeshBuilderFactoryKey](MeshBuilderFactoryKey.md)
* [MeshBuilderFactory](MeshBuilderFactory.md)
* [MeshEdge](MeshEdge.md)
* [MeshEdgesInclusion](MeshEdgesInclusion.md)
* [MeshElement](MeshElement.md)
* [MeshElementsInclusion](MeshElementsInclusion.md)
* [MeshFactory](MeshFactory.md)
* [MeshImplTag](MeshImplTag.md)
* [MeshPolygon](MeshPolygon.md)
* [MeshPolygonsInclusion](MeshPolygonsInclusion.md)
* [MeshTypeTag](MeshTypeTag.md)
* [MeshVertex](MeshVertex.md)
* [MeshVerticesInclusion](MeshVerticesInclusion.md)
* [MeshesElementsMapping](MeshesElementsMapping.md)
* [ModelBoundariesBuilder](ModelBoundariesBuilder.md)
* [ModelBoundaries](ModelBoundaries.md)
* [ModelBoundary](ModelBoundary.md)
* [ModelComponentMappings](ModelComponentMappings.md)
* [ModelComponentMeshEdges](ModelComponentMeshEdges.md)
* [ModelComponentMeshPolygons](ModelComponentMeshPolygons.md)
* [ModelConcatener](ModelConcatener.md)
* [ModelMapping](ModelMapping.md)
* [ModelMappings](ModelMappings.md)
* [ModelMeshesAABBTree](ModelMeshesAABBTree.md)
* [ModelMeshesElementMapping](ModelMeshesElementMapping.md)
* [ModelMeshesVertexMapping](ModelMeshesVertexMapping.md)
* [ModelToMeshMappings](ModelToMeshMappings.md)
* [MultipleValueStorage](MultipleValueStorage.md)
* [NNSearch](NNSearch.md)
* [NamedType](NamedType.md)
* [NormalFrameTransform](NormalFrameTransform.md)
* [OneValueStorage](OneValueStorage.md)
* [OpenGeodeBRepInput](OpenGeodeBRepInput.md)
* [OpenGeodeBRepOutput](OpenGeodeBRepOutput.md)
* [OpenGeodeBasicLibrary](OpenGeodeBasicLibrary.md)
* [OpenGeodeDataException](OpenGeodeDataException.md)
* [OpenGeodeEdgedCurveBuilder](OpenGeodeEdgedCurveBuilder.md)
* [OpenGeodeEdgedCurveInput](OpenGeodeEdgedCurveInput.md)
* [OpenGeodeEdgedCurveOutput](OpenGeodeEdgedCurveOutput.md)
* [OpenGeodeEdgedCurve](OpenGeodeEdgedCurve.md)
* [OpenGeodeException](OpenGeodeException.md)
* [OpenGeodeGeometryLibrary](OpenGeodeGeometryLibrary.md)
* [OpenGeodeGraphBuilder](OpenGeodeGraphBuilder.md)
* [OpenGeodeGraphInput](OpenGeodeGraphInput.md)
* [OpenGeodeGraphOutput](OpenGeodeGraphOutput.md)
* [OpenGeodeGraph](OpenGeodeGraph.md)
* [OpenGeodeHybridSolidBuilder](OpenGeodeHybridSolidBuilder.md)
* [OpenGeodeHybridSolidInput](OpenGeodeHybridSolidInput.md)
* [OpenGeodeHybridSolidOutput](OpenGeodeHybridSolidOutput.md)
* [OpenGeodeHybridSolid](OpenGeodeHybridSolid.md)
* [OpenGeodeImageLibrary](OpenGeodeImageLibrary.md)
* [OpenGeodeLightRegularGridInput](OpenGeodeLightRegularGridInput.md)
* [OpenGeodeMeshLibrary](OpenGeodeMeshLibrary.md)
* [OpenGeodeModelLibrary](OpenGeodeModelLibrary.md)
* [OpenGeodePointException](OpenGeodePointException.md)
* [OpenGeodePointSetBuilder](OpenGeodePointSetBuilder.md)
* [OpenGeodePointSetInput](OpenGeodePointSetInput.md)
* [OpenGeodePointSetOutput](OpenGeodePointSetOutput.md)
* [OpenGeodePointSet](OpenGeodePointSet.md)
* [OpenGeodePolygonalSurfaceBuilder](OpenGeodePolygonalSurfaceBuilder.md)
* [OpenGeodePolygonalSurfaceInput](OpenGeodePolygonalSurfaceInput.md)
* [OpenGeodePolygonalSurfaceOutput](OpenGeodePolygonalSurfaceOutput.md)
* [OpenGeodePolygonalSurface](OpenGeodePolygonalSurface.md)
* [OpenGeodePolyhedralSolidBuilder](OpenGeodePolyhedralSolidBuilder.md)
* [OpenGeodePolyhedralSolidInput](OpenGeodePolyhedralSolidInput.md)
* [OpenGeodePolyhedralSolidOutput](OpenGeodePolyhedralSolidOutput.md)
* [OpenGeodePolyhedralSolid](OpenGeodePolyhedralSolid.md)
* [OpenGeodeRasterImageInput](OpenGeodeRasterImageInput.md)
* [OpenGeodeRasterImageOutput](OpenGeodeRasterImageOutput.md)
* [OpenGeodeRegularGridBuilder](OpenGeodeRegularGridBuilder.md)
* [OpenGeodeRegularGridInput](OpenGeodeRegularGridInput.md)
* [OpenGeodeRegularGridOutput](OpenGeodeRegularGridOutput.md)
* [OpenGeodeRegularGrid](OpenGeodeRegularGrid.md)
* [OpenGeodeResultException](OpenGeodeResultException.md)
* [OpenGeodeSectionInput](OpenGeodeSectionInput.md)
* [OpenGeodeSectionOutput](OpenGeodeSectionOutput.md)
* [OpenGeodeSegmentException](OpenGeodeSegmentException.md)
* [OpenGeodeTetrahedralSolidBuilder](OpenGeodeTetrahedralSolidBuilder.md)
* [OpenGeodeTetrahedralSolidInput](OpenGeodeTetrahedralSolidInput.md)
* [OpenGeodeTetrahedralSolidOutput](OpenGeodeTetrahedralSolidOutput.md)
* [OpenGeodeTetrahedralSolid](OpenGeodeTetrahedralSolid.md)
* [OpenGeodeTetrahedronException](OpenGeodeTetrahedronException.md)
* [OpenGeodeTriangleException](OpenGeodeTriangleException.md)
* [OpenGeodeTriangulatedSurfaceBuilder](OpenGeodeTriangulatedSurfaceBuilder.md)
* [OpenGeodeTriangulatedSurfaceInput](OpenGeodeTriangulatedSurfaceInput.md)
* [OpenGeodeTriangulatedSurfaceOutput](OpenGeodeTriangulatedSurfaceOutput.md)
* [OpenGeodeTriangulatedSurface](OpenGeodeTriangulatedSurface.md)
* [OpenGeodeVertexSetBuilder](OpenGeodeVertexSetBuilder.md)
* [OpenGeodeVertexSetInput](OpenGeodeVertexSetInput.md)
* [OpenGeodeVertexSetOutput](OpenGeodeVertexSetOutput.md)
* [OpenGeodeVertexSet](OpenGeodeVertexSet.md)
* [Output](Output.md)
* [OwnerCircle](OwnerCircle.md)
* [OwnerEllipse](OwnerEllipse.md)
* [OwnerInfiniteLine](OwnerInfiniteLine.md)
* [OwnerPlane](OwnerPlane.md)
* [OwnerPolygon](OwnerPolygon.md)
* [OwnerRay](OwnerRay.md)
* [OwnerSegment](OwnerSegment.md)
* [OwnerSphere](OwnerSphere.md)
* [OwnerTetrahedron](OwnerTetrahedron.md)
* [OwnerTriangle](OwnerTriangle.md)
* [PImpl](PImpl.md)
* [PassKey](PassKey.md)
* [Percentage](Percentage.md)
* [Plane](Plane.md)
* [PointSetBuilder](PointSetBuilder.md)
* [PointSetInput](PointSetInput.md)
* [PointSetOutput](PointSetOutput.md)
* [PointSet](PointSet.md)
* [Point](Point.md)
* [PolygonEdge](PolygonEdge.md)
* [PolygonVertex](PolygonVertex.md)
* [Polygon](Polygon.md)
* [PolygonalSurfaceBuilder](PolygonalSurfaceBuilder.md)
* [PolygonalSurfaceInput](PolygonalSurfaceInput.md)
* [PolygonalSurfaceOutput](PolygonalSurfaceOutput.md)
* [PolygonalSurface](PolygonalSurface.md)
* [PolyhedralSolidBuilder](PolyhedralSolidBuilder.md)
* [PolyhedralSolidInput](PolyhedralSolidInput.md)
* [PolyhedralSolidOutput](PolyhedralSolidOutput.md)
* [PolyhedralSolid](PolyhedralSolid.md)
* [PolyhedronFacetEdge](PolyhedronFacetEdge.md)
* [PolyhedronFacetVertex](PolyhedronFacetVertex.md)
* [PolyhedronFacet](PolyhedronFacet.md)
* [PolyhedronVertex](PolyhedronVertex.md)
* [ProgressLoggerClient](ProgressLoggerClient.md)
* [ProgressLoggerManager](ProgressLoggerManager.md)
* [ProgressLogger](ProgressLogger.md)
* [RGBColor](RGBColor.md)
* [RasterImageInput](RasterImageInput.md)
* [RasterImageOutput](RasterImageOutput.md)
* [RasterImage](RasterImage.md)
* [RayTracing2D](RayTracing2D.md)
* [RayTracing3D](RayTracing3D.md)
* [Ray](Ray.md)
* [ReadOnlyAttribute](ReadOnlyAttribute.md)
* [RegularGridBuilder](RegularGridBuilder.md)
* [RegularGridInput](RegularGridInput.md)
* [RegularGridOutput](RegularGridOutput.md)
* [RegularGrid](RegularGrid.md)
* [RelationshipsBuilder](RelationshipsBuilder.md)
* [Relationships](Relationships.md)
* [SectionBuilder](SectionBuilder.md)
* [SectionComponentMeshEdges](SectionComponentMeshEdges.md)
* [SectionComponentMeshPolygons](SectionComponentMeshPolygons.md)
* [SectionExtruderOptions](SectionExtruderOptions.md)
* [SectionInput](SectionInput.md)
* [SectionMappings](SectionMappings.md)
* [SectionMeshesElementMapping](SectionMeshesElementMapping.md)
* [SectionMeshesVertexMapping](SectionMeshesVertexMapping.md)
* [SectionOutput](SectionOutput.md)
* [Section](Section.md)
* [Segment](Segment.md)
* [SidedSurface](SidedSurface.md)
* [SimplicialBRepCreator](SimplicialBRepCreator.md)
* [SimplicialSectionCreator](SimplicialSectionCreator.md)
* [Singleton](Singleton.md)
* [SmallSet](SmallSet.md)
* [SolidEdgesBuilder](SolidEdgesBuilder.md)
* [SolidEdges](SolidEdges.md)
* [SolidFacetsBuilder](SolidFacetsBuilder.md)
* [SolidFacets](SolidFacets.md)
* [SolidMeshBuilder](SolidMeshBuilder.md)
* [SolidMesh](SolidMesh.md)
* [SortedSurfaces](SortedSurfaces.md)
* [SparseAttribute](SparseAttribute.md)
* [Sphere](Sphere.md)
* [SquareMatrix](SquareMatrix.md)
* [SurfaceCollection](SurfaceCollection.md)
* [SurfaceCollectionsBuilder](SurfaceCollectionsBuilder.md)
* [SurfaceCollections](SurfaceCollections.md)
* [SurfaceDefinition](SurfaceDefinition.md)
* [SurfaceEdgesBuilder](SurfaceEdgesBuilder.md)
* [SurfaceEdges](SurfaceEdges.md)
* [SurfaceMeshBuilder](SurfaceMeshBuilder.md)
* [SurfaceMesh](SurfaceMesh.md)
* [SurfacePolygonEdge](SurfacePolygonEdge.md)
* [SurfacePolygonsEdgeVertices](SurfacePolygonsEdgeVertices.md)
* [Surface](Surface.md)
* [SurfacesBuilder](SurfacesBuilder.md)
* [Surfaces](Surfaces.md)
* [TIndices](TIndices.md)
* [TRange](TRange.md)
* [TReverseRange](TReverseRange.md)
* [TetrahedralSolidBuilder](TetrahedralSolidBuilder.md)
* [TetrahedralSolidInput](TetrahedralSolidInput.md)
* [TetrahedralSolidOutput](TetrahedralSolidOutput.md)
* [TetrahedralSolidPointFunction](TetrahedralSolidPointFunction.md)
* [TetrahedralSolidScalarFunction](TetrahedralSolidScalarFunction.md)
* [TetrahedralSolid](TetrahedralSolid.md)
* [Tetrahedron](Tetrahedron.md)
* [TextureManager](TextureManager.md)
* [TextureStorage](TextureStorage.md)
* [Texture](Texture.md)
* [Timer](Timer.md)
* [TopologyBuilder](TopologyBuilder.md)
* [Topology](Topology.md)
* [Triangle](Triangle.md)
* [TriangulatedSurfaceBuilder](TriangulatedSurfaceBuilder.md)
* [TriangulatedSurfaceInput](TriangulatedSurfaceInput.md)
* [TriangulatedSurfaceOutput](TriangulatedSurfaceOutput.md)
* [TriangulatedSurfacePointFunction](TriangulatedSurfacePointFunction.md)
* [TriangulatedSurfaceScalarFunction](TriangulatedSurfaceScalarFunction.md)
* [TriangulatedSurface](TriangulatedSurface.md)
* [TypedModelMappings](TypedModelMappings.md)
* [TypedModelMeshesElementMapping](TypedModelMeshesElementMapping.md)
* [TypedModelMeshesVertexMapping](TypedModelMeshesVertexMapping.md)
* [UnzipFile](UnzipFile.md)
* [VariableAttribute](VariableAttribute.md)
* [Vector](Vector.md)
* [VertexIdentifierBuilder](VertexIdentifierBuilder.md)
* [VertexIdentifier](VertexIdentifier.md)
* [VertexSetBuilder](VertexSetBuilder.md)
* [VertexSetInput](VertexSetInput.md)
* [VertexSetOutput](VertexSetOutput.md)
* [VertexSet](VertexSet.md)
* [ZipFile](ZipFile.md)
* [uuid](uuid.md)


## Functions

### geode_assertion_failed

```cpp
void geode_assertion_failed(basic_string_view condition, basic_string_view message, basic_string_view file, int line)
```


### geode_lippincott

```cpp
int geode_lippincott()
```


 Try to catch several exception types. Always return 1.

### throw_lippincott

```cpp
void throw_lippincott()
```


 Catch all exceptions and rethrow an OpenGeodeException

### operator""_uc

```cpp
unsigned char operator""_uc(unsigned long long arg)
```


### to_string

```cpp
basic_string to_string(basic_string_view view)
```


### to_array

```cpp
std::array<T, sizeof...(Args)> to_array(Args &&... args)
```


### concatenate

```cpp
void concatenate(Container & container, const Container & values)
```


### concatenate

```cpp
void concatenate(Container & container, Container && values)
```


### delete_vector_elements

```cpp
index_t delete_vector_elements(const DeleteContainer & to_delete, ValueContainer & values)
```


 Delete some elements from a given vector.

**to_delete** [in] Vector of the same size than values. If to_delete[i] is true the i-th element is deleted, else the element is kept.

**values** [in] Vector in which perform deletions.

**return** The number of deleted elements

### extract_vector_elements

```cpp
ValueContainer extract_vector_elements(const DeleteContainer & to_keep, const ValueContainer & in_values)
```


 Create a new vector containing only some elements from a given vector.

**to_keep** [in] Vector of the same size than in_values. If to_keep[i] is true the i-th element is kept.

**in_values** [in] Vector in which perform deletions.

**return** A vector containing only kept elements of in_values

### sort_unique

```cpp
void sort_unique(Container & container)
```


 Modify the container by removing every duplicated values inside

**Container** Type of container.

**container** [in] container in which perform the search.

### sort_unique

```cpp
void sort_unique(Container & container, Comparison comp)
```


### register_geode_builder

```cpp
void register_geode_builder()
```


### permute

```cpp
void permute(Container & data, Span permutation)
```


### old2new_permutation

```cpp
vector old2new_permutation(Span permutation)
```


### register_basic_serialize_pcontext

```cpp
void register_basic_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the basic library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_basic_deserialize_pcontext

```cpp
void register_basic_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the basic library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_image_serialize_pcontext

```cpp
void register_image_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the image library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_image_deserialize_pcontext

```cpp
void register_image_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the image library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### filename_with_extension

```cpp
path filename_with_extension(const std::filesystem::path & path)
```


### filename_without_extension

```cpp
path filename_without_extension(const std::filesystem::path & path)
```


### filepath_without_extension

```cpp
path filepath_without_extension(const std::filesystem::path & path)
```


### filepath_without_filename

```cpp
path filepath_without_filename(const std::filesystem::path & path)
```


### extension_from_filename

```cpp
basic_string_view extension_from_filename(basic_string_view filename)
```


### expand_predefined_folders

```cpp
basic_string expand_predefined_folders(basic_string_view path)
```


### print_available_extensions

```cpp
void print_available_extensions(basic_string_view type)
```


### load_raster_image

```cpp
RasterImage<dimension> load_raster_image(basic_string_view filename)
```


 API function for loading an RasterImage. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### raster_image_additional_files

```cpp
typename RasterImageInput<dimension>::AdditionalFiles raster_image_additional_files(basic_string_view filename)
```


### is_raster_image_loadable

```cpp
Percentage is_raster_image_loadable(basic_string_view filename)
```


### raster_image_object_priority

```cpp
index_t raster_image_object_priority(basic_string_view filename)
```


### save_raster_image

```cpp
vector save_raster_image(const RasterImage<dimension> & raster, basic_string_view filename)
```


 API function for saving a RasterImage. The adequate saver is called depending on the given filename extension.

**raster** [in] RasterImage to save.

**filename** [in] Path to the file where save the RasterImage.

### is_raster_image_saveable

```cpp
bool is_raster_image_saveable(const RasterImage<dimension> & raster, basic_string_view filename)
```


### register_attribute_type

```cpp
void register_attribute_type(PContext & context, basic_string_view name)
```


### register_geode_mesh

```cpp
void register_geode_mesh()
```


### register_mesh_serialize_pcontext

```cpp
void register_mesh_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the mesh library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_mesh_deserialize_pcontext

```cpp
void register_mesh_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the mesh library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### point_point_distance

```cpp
double point_point_distance(const Point<dimension> & point0, const Point<dimension> & point1)
```


 Compute the Euclidean distance between a two points

### point_segment_distance

```cpp
double point_segment_distance(const Point<dimension> & point, const Segment<dimension> & segment)
```


 Compute the smallest distance between a point and a segment

### segment_segment_distance

```cpp
std::tuple<double, Point<dimension>, Point<dimension> > segment_segment_distance(const Segment<dimension> & segment0, const Segment<dimension> & segment1)
```


 Compute the smallest distance between two segments

**return** a tuple containing: - the smallest distance. - the closest point on the first segment. - the closest point on the second segment.

### segment_line_distance

```cpp
std::tuple<double, Point<dimension>, Point<dimension> > segment_line_distance(const Segment<dimension> & segment, const InfiniteLine<dimension> & line)
```


### point_line_distance

```cpp
double point_line_distance(const Point<dimension> & point, const InfiniteLine<dimension> & line)
```


 Compute the smallest distance between a point and an infinite line

### point_line_signed_distance

```cpp
double point_line_signed_distance(const Point2D & point, const InfiniteLine2D & line)
```


 Compute the smallest signed distance between a point and an infinite line in 2D

### point_triangle_distance

```cpp
std::tuple<double, Point<dimension> > point_triangle_distance(const Point<dimension> & point, const Triangle<dimension> & triangle)
```

 Compute the smallest distance between a point and a triangle

**return** a tuple containing: - the smallest distance. - the closest point on the triangle.

### point_triangle_signed_distance

```cpp
tuple point_triangle_signed_distance(const Point3D & point, const Triangle3D & triangle)
```


 Compute the signed distance between a point and a triangle

**return** a tuple containing: - the smallest distance. - the closest point on the triangle.

**details** the sign is given by the triangle normal (positive if in the same plane).

### line_triangle_distance

```cpp
std::tuple<double, Point3D, Point3D> line_triangle_distance(const InfiniteLine3D & line, const Triangle3D & triangle)
```


 Compute the smallest distance between an infinite line and a triangle

**return** a tuple containing: - the smallest distance. - the closest point on the line. - the closest point on the triangle.

### segment_triangle_distance

```cpp
std::tuple<double, Point3D, Point3D> segment_triangle_distance(const Segment3D & segment, const Triangle3D & triangle)
```


 Compute the smallest distance between an segment and a triangle

**return** a tuple containing: - the smallest distance. - the closest point on the segment. - the closest point on the triangle.

### triangle_triangle_distance

```cpp
std::tuple<double, Point3D, Point3D> triangle_triangle_distance(const Triangle3D & triangle0, const Triangle3D & triangle1)
```


 Compute the smallest distance between two triangles

**return** a tuple containing: - the smallest distance. - the closest point on the first triangle. - the closest point on the second triangle.

### triangle_triangle_distance_between_non_conformal_parts

```cpp
std::optional<std::tuple<double, Point3D, Point3D> > triangle_triangle_distance_between_non_conformal_parts(const Triangle3D & triangle0, const Triangle3D & triangle1)
```


 Compute the smallest distance between two triangles

**details** if the two triangles are the same, return nullopt. Only non conformal part of triangles are considered in computation of distance, i.e. if the triangle have a common point, it iterates on opposite segment, if the triangle have a common edge, it computes distance with the opposite point

**return** a tuple containing: - the smallest distance. - the closest point on the first triangle. - the closest point on the second triangle.

### point_tetrahedron_distance

```cpp
tuple point_tetrahedron_distance(const Point3D & point, const Tetrahedron & tetra)
```


 Compute the distance between a point and a tetrahedron

**return** a tuple containing: - the smallest distance. - the nearest point on the tetrahedron.

### point_plane_distance

```cpp
tuple point_plane_distance(const Point3D & point, const Plane & plane)
```


 Compute the distance between a point and a plane

**return** a tuple containing: - the smallest distance. - the nearest point on the plane.

### point_plane_signed_distance

```cpp
tuple point_plane_signed_distance(const Point3D & point, const Plane & plane)
```


 Compute the signed distance between a point and a plane

**return** a tuple containing: - the signed distance (sign is given by the plane normal direction). - the nearest point on the plane.

### point_sphere_distance

```cpp
std::tuple<double, Point<dimension> > point_sphere_distance(const Point<dimension> & point, const Sphere<dimension> & sphere)
```


 Compute the smallest distance between a point and a sphere

**return** a tuple containing: - the smallest distance. - the closest point on the sphere.

### point_sphere_signed_distance

```cpp
std::tuple<double, Point<dimension> > point_sphere_signed_distance(const Point<dimension> & point, const Sphere<dimension> & sphere)
```


 Compute the smallest signed distance between a point and a sphere

**return** a tuple containing: - the smallest signed distance. - the closest point on the sphere.

**details** the sign is positive outside the sphere, negative inside.

### point_ball_distance

```cpp
std::tuple<double, Point<dimension> > point_ball_distance(const Point<dimension> & point, const Ball<dimension> & sphere)
```


 Compute the smallest distance between a point and a ball

**return** a tuple containing: - the smallest distance. - the closest point on the ball.

**details** Result is always positive or null. If point is inside the ball, the returned distance is 0.

### point_circle_distance

```cpp
tuple point_circle_distance(const Point3D & point, const Circle & circle)
```


 Compute the smallest distance between a point and a circle

**return** a tuple containing: - the smallest distance. - the closest point on the circle.

### point_circle_signed_distance

```cpp
tuple point_circle_signed_distance(const Point3D & point, const Circle & circle)
```


 Compute the smallest signed distance between a point and a circle

**return** a tuple containing: - the smallest signed distance. - the closest point on the circle.

**details** the sign is positive outside the circle, negative inside.

### point_disk_distance

```cpp
tuple point_disk_distance(const Point3D & point, const Disk & disk)
```


 Compute the smallest distance between a point and a disk

**return** a tuple containing: - the smallest distance. - the closest point on the disk.

**details** Result is always positive or null. If point is inside the disk, the returned distance is 0.

### point_ellipse_distance

```cpp
std::tuple<double, Point<dimension> > point_ellipse_distance(const Point<dimension> & point, const Ellipse<dimension> & ellipse)
```


 Compute the smallest distance between a point and an ellipse

**return** a tuple containing: - the smallest distance. - the closest point on the ellipse.

### triangle_area

```cpp
double triangle_area(const Triangle<dimension> & triangle)
```


 Compute the (positive) area of a triangle

**triangle** [in] Triangle to compute area

### triangle_signed_area

```cpp
double triangle_signed_area(const Triangle2D & triangle)
```


 Compute the signed area of a triangle

**triangle** [in] Triangle to compute area returned area is positive if the triangle vertices are ordered counter-clockwise, negative if clockwise.

### triangle_signed_area

```cpp
double triangle_signed_area(const Triangle3D & triangle, const Vector3D & direction)
```


 Compute the signed area of a 3D triangle

**triangle** [in] Triangle to compute area

**direction** [in] Direction used to determined the sign of returned area: positive if the triangle normal is in the same direction than direction, negative if the triangle normal is in the opposition direction.

### tetrahedron_signed_volume

```cpp
double tetrahedron_signed_volume(const Tetrahedron & tetra)
```


 Compute the signed volume of a tetrahedron

### tetrahedron_volume

```cpp
double tetrahedron_volume(const Tetrahedron & tetra)
```


 Compute the (positive) volume of a tetrahedron

### save_triangulated_surface

```cpp
std::vector<std::string> save_triangulated_surface(const TriangulatedSurface<dimension> & triangulated_surface, basic_string_view filename)
```


 API function for saving a TriangulatedSurface. The adequate saver is called depending on the given filename extension.

**triangulated_surface** [in] TriangulatedSurface to save.

**filename** [in] Path to the file where save the TriangulatedSurface.

### is_triangulated_surface_saveable

```cpp
bool is_triangulated_surface_saveable(const TriangulatedSurface<dimension> & triangulated_surface, basic_string_view filename)
```


### segment_segment_intersection_detection

```cpp
pair segment_segment_intersection_detection(const Segment2D & segment0, const Segment2D & segment1)
```


 Detect if there is an intersection between two 2D segments

**return** the position of the intersection on the two segments. Returns outside-outside if there is no intersection or parallel-pallel if all points are colinear

### colinear_segment_segment_intersection_detection

```cpp
pair colinear_segment_segment_intersection_detection(const Segment2D & segment0, const Segment2D & segment1)
```


 Detect the configuration between two 2D colinear segments

**return** the position of the intersection on the two segments. Returns parallel-pallel if there is segment overlap

### segment_line_intersection_detection

```cpp
POSITION segment_line_intersection_detection(const Segment2D & segment, const InfiniteLine2D & line)
```


 Detect if there is an intersection between a line and a segment

**return** the position of the intersection on the segment. Returns outside if there is no intersection or all points are colinear

### line_triangle_intersection_detection

```cpp
POSITION line_triangle_intersection_detection(const InfiniteLine3D & line, const Triangle3D & triangle)
```


 Detect if there is an intersection between a line and a triangle

**return** the position of the intersection on the triangle. Returns outside if there is no intersection or the line is coplanar with the triangle

### segment_triangle_intersection_detection

```cpp
pair segment_triangle_intersection_detection(const Segment3D & segment, const Triangle3D & triangle)
```


 Detect if there is an intersection between a segment and a triangle

**return** the position of the intersection on the segment and on the triangle. Returns outside if there is no intersection or the segment is coplanar with the triangle

### segment_plane_intersection_detection

```cpp
POSITION segment_plane_intersection_detection(const Segment3D & segment, const Plane & plane)
```


 Detect if there is an intersection between a segment and a plane

**return** the position of the intersection on the segment. Returns outside if there is no intersection or the segment is coplanar with the plane

### line_plane_intersection

```cpp
IntersectionResult<Point3D> line_plane_intersection(const InfiniteLine3D & line, const Plane & plane)
```


 Compute the intersection between a plane and an infinite line

**return** an optional of the intersection.

### line_sphere_intersection

```cpp
IntersectionResult<absl::InlinedVector<Point<dimension>, 2> > line_sphere_intersection(const InfiniteLine<dimension> & line, const Sphere<dimension> & sphere)
```


 Compute the intersection(s) between a sphere and an infinite line

**return** an optional of the intersection points.

### segment_sphere_intersection

```cpp
IntersectionResult<absl::InlinedVector<Point<dimension>, 2> > segment_sphere_intersection(const Segment<dimension> & segment, const Sphere<dimension> & sphere)
```


 Compute the intersection(s) between a (n-1)-sphere and a segment in n-dimension space.

**return** an optional of the intersection points.

### segment_plane_intersection

```cpp
IntersectionResult<Point3D> segment_plane_intersection(const Segment3D & segment, const Plane & plane)
```


 Compute the intersection between a plane and a segment

**return** an optional of the intersection point.

**warning** if the segment is included in the plane nothing is returned

### segment_triangle_intersection

```cpp
IntersectionResult<Point3D> segment_triangle_intersection(const Segment3D & segment, const Triangle3D & triangle)
```


 Compute the intersection of a segment and a triangle

**return** an optional of the intersection point.

**warning** if the segment is included in the triangle plane nothing is returned

### line_triangle_intersection

```cpp
IntersectionResult<Point3D> line_triangle_intersection(const InfiniteLine3D & line, const Triangle3D & triangle)
```


 Compute the intersection of a line and a triangle

**return** an optional of the intersection point.

**warning** if the segment is included in the triangle plane nothing is returned

### line_line_intersection

```cpp
IntersectionResult<Point2D> line_line_intersection(const InfiniteLine2D & line0, const InfiniteLine2D & line1)
```


 Compute the intersection between two infinite lines

**return** an optional of the intersection point.

### segment_segment_intersection

```cpp
IntersectionResult<Point2D> segment_segment_intersection(const Segment2D & segment0, const Segment2D & segment1)
```


 Compute the intersection between two segments

**return** an optional of the intersection point.

### segment_line_intersection

```cpp
IntersectionResult<Point2D> segment_line_intersection(const Segment2D & segment, const InfiniteLine2D & line)
```


 Compute the intersection between a segment and an infinite line

**return** an optional of the intersection point.

### segment_cylinder_intersection

```cpp
IntersectionResult segment_cylinder_intersection(const Segment3D & segment, const Cylinder & cylinder)
```


 Compute the intersection between a segment and a cylinder

**return** an optional of the intersection points.

### line_cylinder_intersection

```cpp
IntersectionResult line_cylinder_intersection(const InfiniteLine3D & line, const Cylinder & cylinder)
```


 Compute the intersection between a line and a cylinder

**return** an optional of the intersection points.

### triangle_circle_intersection

```cpp
IntersectionResult triangle_circle_intersection(const Triangle3D & triangle, const Circle & circle)
```


 Compute the intersection between a triangle and a circle

**return** an optional of the intersection points.

### plane_circle_intersection

```cpp
IntersectionResult plane_circle_intersection(const Plane & plane, const Circle & circle)
```


 Compute the intersection between a plane and a circle

**return** an optional of the intersection points.

### plane_plane_intersection

```cpp
IntersectionResult<OwnerInfiniteLine3D> plane_plane_intersection(const Plane & plane0, const Plane & plane1)
```


 Compute the intersection between two planes

**return** an optional of the intersection line.

### segment_ellipse_intersection

```cpp
IntersectionResult<absl::InlinedVector<Point<dimension>, 2> > segment_ellipse_intersection(const Segment<dimension> & segment, const Ellipse<dimension> & ellipse)
```


 Compute the intersection between a segment and an ellipse

**return** an optional of the intersection points.

### line_ellipse_intersection

```cpp
IntersectionResult<absl::InlinedVector<Point<dimension>, 2> > line_ellipse_intersection(const InfiniteLine<dimension> & line, const Ellipse<dimension> & ellipse)
```


 Compute the intersection between a line and an ellipse

**return** an optional of the intersection points.

### point_side_to_segment

```cpp
SIDE point_side_to_segment(const Point2D & point, const Segment2D & segment)
```


 Return the point side to a segment.

### point_side_to_line

```cpp
SIDE point_side_to_line(const Point2D & point, const InfiniteLine2D & line)
```


 Return the point side to a line.

### point_side_to_plane

```cpp
SIDE point_side_to_plane(const Point3D & point, const Plane & plane)
```


 Return the point side to a plane.

### point_side_to_triangle

```cpp
SIDE point_side_to_triangle(const Point3D & point, const Triangle3D & triangle)
```


 Return the point side to a 3D triangle.

### point_segment_position

```cpp
POSITION point_segment_position(const Point<dimension> & point, const Segment<dimension> & segment)
```


 Return the position of a point on a segment: inside, outside or on segment vertex.

### point_triangle_position

```cpp
POSITION point_triangle_position(const Point<dimension> & point, const Triangle<dimension> & triangle)
```

 Return the position of a point in a triangle: inside, outside, on a triangle vertex or an edge.

### point_tetrahedron_position

```cpp
POSITION point_tetrahedron_position(const Point3D & point, const Tetrahedron & tetra)
```


 Return the position of a point in a tetrahedron: inside, outside, on a tetra vertex, an edge or a facet.

### are_points_aligned

```cpp
bool are_points_aligned(const Point<dimension> & point0, const Point<dimension> & point1, const Point<dimension> & point2)
```

 Return true if the three points are exactly aligned.

### perpendicular

```cpp
Vector perpendicular(const Vector2D & v)
```


 Return a 2D vector perpendicular to the given one

### dot_perpendicular

```cpp
double dot_perpendicular(const Vector2D & v0, const Vector2D & v1)
```


 Compute the dot product between a 2D vector **p**  and another 2D vector perpendicular to **p** 

### lexicographic_mapping

```cpp
vector lexicographic_mapping(absl::Span<const Point<dimension> > points)
```


### morton_mapping

```cpp
vector morton_mapping(absl::Span<const Point<dimension> > points)
```


### hilbert_mapping

```cpp
vector hilbert_mapping(absl::Span<const Point<dimension> > points)
```


### tetrahedron_barycentric_coordinates

```cpp
array tetrahedron_barycentric_coordinates(const Point3D & point, const Tetrahedron & tetrahedron)
```


 Compute the barycentric coordinates of a point with regards to a tetrahedron.

**return** an array containing the parametric coordinates corresponding to the tetrahedron vertices.

**exception**if the tetrahedron is degenerated

### safe_tetrahedron_barycentric_coordinates

```cpp
array safe_tetrahedron_barycentric_coordinates(const Point3D & point, const Tetrahedron & tetrahedron)
```


 Compute the barycentric coordinates of a point with regards to a tetrahedron. If tetrahedron is degenerated, computation fallbacks onto its largest facet.

**return** an array containing the parametric coordinates corresponding to the tetrahedron vertices.

### triangle_barycentric_coordinates

```cpp
array triangle_barycentric_coordinates(const Point<dimension> & point, const Triangle<dimension> & triangle)
```


 Compute barycentric coordinates of a point with regards to a triangle.

**return** an array containing the parametric coordinates corresponding to the triangle vertices.

**exception**if the triangle is degenerated

### safe_triangle_barycentric_coordinates

```cpp
array safe_triangle_barycentric_coordinates(const Point<dimension> & point, const Triangle<dimension> & triangle)
```


 Compute barycentric coordinates of a point with regards to a triangle. If triangle is degenerated, computation fallbacks onto its longest segment.

**return** an array containing the parametric coordinates corresponding to the triangle vertices.

### segment_barycentric_coordinates

```cpp
array segment_barycentric_coordinates(const Point<dimension> & point, const Segment<dimension> & segment)
```


 Compute barycentric coordinates of a point with regards to a segment.

**return** an array containing the parametric coordinates corresponding to the segment vertices.

**exception**if the segment is degenerated

### safe_segment_barycentric_coordinates

```cpp
array safe_segment_barycentric_coordinates(const Point<dimension> & point, const Segment<dimension> & segment)
```


 Compute barycentric coordinates of a point with regards to a segment. If segment is degenerated, computation fallbacks onto its vertices.

**return** an array containing the parametric coordinates corresponding to the segment vertices.

### save_section

```cpp
vector save_section(const Section & section, basic_string_view filename)
```


 API function for saving a Section. The adequate saver is called depending on the given filename extension.

**section** [in] Section to save.

**filename** [in] Path to the file where save the section.

### is_section_saveable

```cpp
bool is_section_saveable(const Section & section, basic_string_view filename)
```


### are_mesh_elements_included

```cpp
bool are_mesh_elements_included(const MeshElementsInclusion<MeshElementType> & inclusion)
```


### are_mesh_elements_included

```cpp
bool are_mesh_elements_included(const MeshElementsInclusion<MeshElementType> & inclusion, const SkipMeshElement & skip)
```


### load_brep

```cpp
BRep load_brep(basic_string_view filename)
```


 API function for loading a BoundaryRepresentation. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

**return** Loaded BRep.

### brep_additional_files

```cpp
AdditionalFiles brep_additional_files(basic_string_view filename)
```


### is_brep_loadable

```cpp
Percentage is_brep_loadable(basic_string_view filename)
```


### brep_object_priority

```cpp
index_t brep_object_priority(basic_string_view filename)
```


### is_zip_file

```cpp
bool is_zip_file(basic_string_view file)
```


### save_brep

```cpp
vector save_brep(const BRep & brep, basic_string_view filename)
```


 API function for saving a BoundaryRepresentation. The adequate saver is called depending on the given filename extension.

**brep** [in] BRep to save.

**filename** [in] Path to the file where save the brep.

### is_brep_saveable

```cpp
bool is_brep_saveable(const BRep & brep, basic_string_view filename)
```


### load_section

```cpp
Section load_section(basic_string_view filename)
```


 API function for loading a Section. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

**return** Loaded Section.

### section_additional_files

```cpp
AdditionalFiles section_additional_files(basic_string_view filename)
```


### is_section_loadable

```cpp
Percentage is_section_loadable(basic_string_view filename)
```


### section_object_priority

```cpp
index_t section_object_priority(basic_string_view filename)
```


### load_point_set

```cpp
std::unique_ptr<PointSet<dimension> > load_point_set(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an PointSet. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_point_set

```cpp
std::unique_ptr<PointSet<dimension> > load_point_set(basic_string_view filename)
```


 API function for loading an PointSet. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### point_set_additional_files

```cpp
typename PointSetInput<dimension>::AdditionalFiles point_set_additional_files(basic_string_view filename)
```


### is_point_set_loadable

```cpp
Percentage is_point_set_loadable(basic_string_view filename)
```


### point_set_object_priority

```cpp
index_t point_set_object_priority(basic_string_view filename)
```


### load_vertex_set

```cpp
unique_ptr load_vertex_set(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an VertexSet. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_vertex_set

```cpp
unique_ptr load_vertex_set(basic_string_view filename)
```


 API function for loading an VertexSet. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### vertex_set_additional_files

```cpp
AdditionalFiles vertex_set_additional_files(basic_string_view filename)
```


### is_vertex_set_loadable

```cpp
Percentage is_vertex_set_loadable(basic_string_view filename)
```


### vertex_set_object_priority

```cpp
index_t vertex_set_object_priority(basic_string_view filename)
```


### save_point_set

```cpp
vector save_point_set(const PointSet<dimension> & point_set, basic_string_view filename)
```


 API function for saving a PointSet. The adequate saver is called depending on the given filename extension.

**point_set** [in] PointSet to save.

**filename** [in] Path to the file where save the PointSet.

### is_point_set_saveable

```cpp
bool is_point_set_saveable(const PointSet<dimension> & point_set, basic_string_view filename)
```


### save_vertex_set

```cpp
vector save_vertex_set(const VertexSet & vertex_set, basic_string_view filename)
```


 API function for saving a VertexSet. The adequate saver is called depending on the given filename extension.

**vertex_set** [in] VertexSet to save.

**filename** [in] Path to the file where save the VertexSet.

### is_vertex_set_saveable

```cpp
bool is_vertex_set_saveable(const VertexSet & vertex_set, basic_string_view filename)
```


### load_polygonal_surface

```cpp
std::unique_ptr<PolygonalSurface<dimension> > load_polygonal_surface(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an PolygonalSurface. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_polygonal_surface

```cpp
std::unique_ptr<PolygonalSurface<dimension> > load_polygonal_surface(basic_string_view filename)
```


 API function for loading an PolygonalSurface. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### polygonal_surface_additional_files

```cpp
typename PolygonalSurfaceInput<dimension>::AdditionalFiles polygonal_surface_additional_files(basic_string_view filename)
```


### is_polygonal_surface_loadable

```cpp
Percentage is_polygonal_surface_loadable(basic_string_view filename)
```


### polygonal_surface_object_priority

```cpp
index_t polygonal_surface_object_priority(basic_string_view filename)
```


### save_polygonal_surface

```cpp
vector save_polygonal_surface(const PolygonalSurface<dimension> & polygonal_surface, basic_string_view filename)
```


 API function for saving a PolygonalSurface. The adequate saver is called depending on the given filename extension.        const PolygonalSurface< dimension >& polygonal_surface,

**edged_curve** [in] PolygonalSurface to save.

**filename** [in] Path to the file where save the PolygonalSurface.

### is_polygonal_surface_saveable

```cpp
bool is_polygonal_surface_saveable(const PolygonalSurface<dimension> & polygonal_surface, basic_string_view filename)
```


### load_polyhedral_solid

```cpp
std::unique_ptr<PolyhedralSolid<dimension> > load_polyhedral_solid(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an PolyhedralSolid. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_polyhedral_solid

```cpp
std::unique_ptr<PolyhedralSolid<dimension> > load_polyhedral_solid(basic_string_view filename)
```


 API function for loading an PolyhedralSolid. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### polyhedral_solid_additional_files

```cpp
typename PolyhedralSolidInput<dimension>::AdditionalFiles polyhedral_solid_additional_files(basic_string_view filename)
```


### is_polyhedral_solid_loadable

```cpp
Percentage is_polyhedral_solid_loadable(basic_string_view filename)
```


### polyhedral_solid_object_priority

```cpp
index_t polyhedral_solid_object_priority(basic_string_view filename)
```


### save_polyhedral_solid

```cpp
vector save_polyhedral_solid(const PolyhedralSolid<dimension> & polyhedral_solid, basic_string_view filename)
```


 API function for saving a PolyhedralSolid. The adequate saver is called depending on the given filename extension.

**polyhedral_solid** [in] PolyhedralSolid to save.

**filename** [in] Path to the file where save the PolyhedralSolid.

### is_polyhedral_solid_saveable

```cpp
bool is_polyhedral_solid_saveable(const PolyhedralSolid<dimension> & polyhedral_solid, basic_string_view filename)
```


### register_geode_mesh_input

```cpp
void register_geode_mesh_input()
```


### load_edged_curve

```cpp
std::unique_ptr<EdgedCurve<dimension> > load_edged_curve(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an EdgedCurve. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_edged_curve

```cpp
std::unique_ptr<EdgedCurve<dimension> > load_edged_curve(basic_string_view filename)
```


 API function for loading an EdgedCurve. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### edged_curve_additional_files

```cpp
typename EdgedCurveInput<dimension>::AdditionalFiles edged_curve_additional_files(basic_string_view filename)
```


### is_edged_curve_loadable

```cpp
Percentage is_edged_curve_loadable(basic_string_view filename)
```


### edged_curve_object_priority

```cpp
index_t edged_curve_object_priority(basic_string_view filename)
```


### register_geometry_serialize_pcontext

```cpp
void register_geometry_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the geometry library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_geometry_deserialize_pcontext

```cpp
void register_geometry_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the geometry library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### load_graph

```cpp
unique_ptr load_graph(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an Graph. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_graph

```cpp
unique_ptr load_graph(basic_string_view filename)
```


 API function for loading an Graph. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### graph_additional_files

```cpp
AdditionalFiles graph_additional_files(basic_string_view filename)
```


### is_graph_loadable

```cpp
Percentage is_graph_loadable(basic_string_view filename)
```


### graph_object_priority

```cpp
index_t graph_object_priority(basic_string_view filename)
```


### load_hybrid_solid

```cpp
std::unique_ptr<HybridSolid<dimension> > load_hybrid_solid(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an HybridSolid. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_hybrid_solid

```cpp
std::unique_ptr<HybridSolid<dimension> > load_hybrid_solid(basic_string_view filename)
```


 API function for loading an HybridSolid. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### hybrid_solid_additional_files

```cpp
typename HybridSolidInput<dimension>::AdditionalFiles hybrid_solid_additional_files(basic_string_view filename)
```


### is_hybrid_solid_loadable

```cpp
Percentage is_hybrid_solid_loadable(basic_string_view filename)
```


### hybrid_solid_object_priority

```cpp
index_t hybrid_solid_object_priority(basic_string_view filename)
```


### load_light_regular_grid

```cpp
LightRegularGrid<dimension> load_light_regular_grid(basic_string_view filename)
```


 API function for loading an LightRegularGrid. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### light_regular_grid_additional_files

```cpp
typename LightRegularGridInput<dimension>::AdditionalFiles light_regular_grid_additional_files(basic_string_view filename)
```


### is_light_regular_grid_loadable

```cpp
Percentage is_light_regular_grid_loadable(basic_string_view filename)
```


### light_regular_grid_object_priority

```cpp
index_t light_regular_grid_object_priority(basic_string_view filename)
```


### load_regular_grid

```cpp
std::unique_ptr<RegularGrid<dimension> > load_regular_grid(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an RegularGrid. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_regular_grid

```cpp
std::unique_ptr<RegularGrid<dimension> > load_regular_grid(basic_string_view filename)
```


 API function for loading a RegularGrid. The adequate loader is called depending on the filename extension.

**filename** [in] Path to the file to load.

### regular_grid_additional_files

```cpp
typename RegularGridInput<dimension>::AdditionalFiles regular_grid_additional_files(basic_string_view filename)
```


### is_regular_grid_loadable

```cpp
Percentage is_regular_grid_loadable(basic_string_view filename)
```


### regular_grid_object_priority

```cpp
index_t regular_grid_object_priority(basic_string_view filename)
```


### load_tetrahedral_solid

```cpp
std::unique_ptr<TetrahedralSolid<dimension> > load_tetrahedral_solid(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an TetrahedralSolid. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_tetrahedral_solid

```cpp
std::unique_ptr<TetrahedralSolid<dimension> > load_tetrahedral_solid(basic_string_view filename)
```


 API function for loading an TetrahedralSolid. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### tetrahedral_solid_additional_files

```cpp
typename TetrahedralSolidInput<dimension>::AdditionalFiles tetrahedral_solid_additional_files(basic_string_view filename)
```


### is_tetrahedral_solid_loadable

```cpp
Percentage is_tetrahedral_solid_loadable(basic_string_view filename)
```


### tetrahedral_solid_object_priority

```cpp
index_t tetrahedral_solid_object_priority(basic_string_view filename)
```


### load_triangulated_surface

```cpp
std::unique_ptr<TriangulatedSurface<dimension> > load_triangulated_surface(const MeshImpl & impl, basic_string_view filename)
```


 API function for loading an TriangulatedSurface. The adequate loader is called depending on the filename extension.

**impl** [in] Data structure implementation.

**filename** [in] Path to the file to load.

### load_triangulated_surface

```cpp
std::unique_ptr<TriangulatedSurface<dimension> > load_triangulated_surface(basic_string_view filename)
```


 API function for loading an TriangulatedSurface. The adequate loader is called depending on the filename extension. Default data structure implémentation is used.

**filename** [in] Path to the file to load.

### triangulated_surface_additional_files

```cpp
typename TriangulatedSurfaceInput<dimension>::AdditionalFiles triangulated_surface_additional_files(basic_string_view filename)
```


### is_triangulated_surface_loadable

```cpp
Percentage is_triangulated_surface_loadable(basic_string_view filename)
```


### triangulated_surface_object_priority

```cpp
index_t triangulated_surface_object_priority(basic_string_view filename)
```


### register_geode_mesh_output

```cpp
void register_geode_mesh_output()
```


### save_edged_curve

```cpp
vector save_edged_curve(const EdgedCurve<dimension> & edged_curve, basic_string_view filename)
```


 API function for saving a EdgedCurve. The adequate saver is called depending on the given filename extension.

**edged_curve** [in] EdgedCurve to save.

**filename** [in] Path to the file where save the EdgedCurve.

### is_edged_curve_saveable

```cpp
bool is_edged_curve_saveable(const EdgedCurve<dimension> & edged_curve, basic_string_view filename)
```


### save_graph

```cpp
vector save_graph(const Graph & graph, basic_string_view filename)
```


 API function for saving a Graph. The adequate saver is called depending on the given filename extension.

**graph** [in] Graph to save.

**filename** [in] Path to the file where save the Graph.

### is_graph_saveable

```cpp
bool is_graph_saveable(const Graph & graph, basic_string_view filename)
```


### save_hybrid_solid

```cpp
vector save_hybrid_solid(const HybridSolid<dimension> & hybrid_solid, basic_string_view filename)
```


 API function for saving a HybridSolid. The adequate saver is called depending on the given filename extension.

**hybrid_solid** [in] HybridSolid to save.

**filename** [in] Path to the file where save the HybridSolid.

### is_hybrid_solid_saveable

```cpp
bool is_hybrid_solid_saveable(const HybridSolid<dimension> & hybrid_solid, basic_string_view filename)
```


### save_regular_grid

```cpp
vector save_regular_grid(const RegularGrid<dimension> & regular_grid, basic_string_view filename)
```


 API function for saving a RegularGrid. The adequate saver is called depending on the given filename extension.

**regular_grid** [in] RegularGrid to save.

**filename** [in] Path to the file where save the RegularGrid.

### is_regular_grid_saveable

```cpp
bool is_regular_grid_saveable(const RegularGrid<dimension> & regular_grid, basic_string_view filename)
```


### save_tetrahedral_solid

```cpp
vector save_tetrahedral_solid(const TetrahedralSolid<dimension> & tetrahedral_solid, basic_string_view filename)
```


 API function for saving a TetrahedralSolid. The adequate saver is called depending on the given filename extension.

**tetrahedral_solid** [in] TetrahedralSolid to save.

**filename** [in] Path to the file where save the TetrahedralSolid.

### is_tetrahedral_solid_saveable

```cpp
bool is_tetrahedral_solid_saveable(const TetrahedralSolid<dimension> & tetrahedral_solid, basic_string_view filename)
```


### save_light_regular_grid

```cpp
vector save_light_regular_grid(const LightRegularGrid<dimension> & light_regular_grid, basic_string_view filename)
```


 API function for saving a LightRegularGrid. The adequate saver is called depending on the given filename extension.

**light_regular_grid** [in] LightRegularGrid to save.

**filename** [in] Path to the file where save the LightRegularGrid.

### is_light_regular_grid_saveable

```cpp
bool is_light_regular_grid_saveable(const LightRegularGrid<dimension> & light_regular_grid, basic_string_view filename)
```


### register_model_serialize_pcontext

```cpp
void register_model_serialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to serialize the objects in the model library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### register_model_deserialize_pcontext

```cpp
void register_model_deserialize_pcontext(PContext & context)
```


 Register all the information needed by Bitsery to deserialize the objects in the model library.

**context** [in] The context where to register this information.

**warning** The context can be used only once per archive.

### create_lines_aabb_tree

```cpp
tuple create_lines_aabb_tree(const BRep & model)
```


### create_surfaces_aabb_tree

```cpp
tuple create_surfaces_aabb_tree(const BRep & model)
```


### create_blocks_aabb_tree

```cpp
tuple create_blocks_aabb_tree(const BRep & model)
```


### create_lines_aabb_tree

```cpp
tuple create_lines_aabb_tree(const Section & model)
```


### create_surfaces_aabb_tree

```cpp
tuple create_surfaces_aabb_tree(const Section & model)
```


### create_line_meshes_aabb_trees

```cpp
ModelMeshesAABBTree create_line_meshes_aabb_trees(const BRep & model)
```


### create_surface_meshes_aabb_trees

```cpp
ModelMeshesAABBTree create_surface_meshes_aabb_trees(const BRep & model)
```


### create_block_meshes_aabb_trees

```cpp
ModelMeshesAABBTree create_block_meshes_aabb_trees(const BRep & model)
```


### create_line_meshes_aabb_trees

```cpp
ModelMeshesAABBTree create_line_meshes_aabb_trees(const Section & model)
```


### create_surface_meshes_aabb_trees

```cpp
ModelMeshesAABBTree create_surface_meshes_aabb_trees(const Section & model)
```


### create_aabb_tree

```cpp
AABBTree<dimension> create_aabb_tree(const EdgedCurve<dimension> & mesh)
```


### create_aabb_tree

```cpp
AABBTree<dimension> create_aabb_tree(const SolidMesh<dimension> & mesh)
```


### create_aabb_tree

```cpp
AABBTree<dimension> create_aabb_tree(const SurfaceMesh<dimension> & mesh)
```


### edge_unique_vertices

```cpp
array edge_unique_vertices(const Section & section, const Line2D & line, index_t edge)
```


### edge_unique_vertices

```cpp
array edge_unique_vertices(const Section & section, const Surface2D & surface, const PolygonEdge & edge)
```


### edge_unique_vertices

```cpp
array edge_unique_vertices(const BRep & brep, const Line3D & line, index_t edge)
```


### edge_unique_vertices

```cpp
array edge_unique_vertices(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge)
```


### edge_unique_vertices

```cpp
array edge_unique_vertices(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### component_mesh_edges

```cpp
SectionComponentMeshEdges component_mesh_edges(const Section & section, const std::array<index_t, 2> & edge_unique_vertices)
```


### component_mesh_edges

```cpp
SectionComponentMeshEdges component_mesh_edges(const Section & section, const Line2D & line, index_t edge)
```


### component_mesh_edges

```cpp
SectionComponentMeshEdges component_mesh_edges(const Section & section, const Surface2D & surface, const PolygonEdge & edge)
```


### component_mesh_edges

```cpp
BRepComponentMeshEdges component_mesh_edges(const BRep & brep, const std::array<index_t, 2> & edge_unique_vertices)
```


### component_mesh_edges

```cpp
BRepComponentMeshEdges component_mesh_edges(const BRep & brep, const Line3D & line, index_t edge)
```


### component_mesh_edges

```cpp
BRepComponentMeshEdges component_mesh_edges(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge)
```


### component_mesh_edges

```cpp
BRepComponentMeshEdges component_mesh_edges(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### component_mesh_vertex_generic

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_generic(Span unique_vertices)
```


### component_mesh_vertex_generic

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_generic(Span unique_vertices, const ComponentType & type)
```


### component_mesh_vertex_generic

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_generic(Span unique_vertices, const ComponentID & component)
```


### component_mesh_vertex_pairs

```cpp
flat_hash_map component_mesh_vertex_pairs(Span unique_vertices0, Span unique_vertices1)
```


### component_mesh_vertex_pairs

```cpp
flat_hash_map component_mesh_vertex_pairs(Span unique_vertices0, Span unique_vertices1, const ComponentType & type)
```


### component_mesh_vertex_pairs

```cpp
flat_hash_map component_mesh_vertex_pairs(Span unique_vertices0, Span unique_vertices1, const ComponentID & component)
```


### component_mesh_vertex_triplets

```cpp
flat_hash_map component_mesh_vertex_triplets(Span unique_vertices0, Span unique_vertices1, Span unique_vertices2)
```


### component_mesh_vertex_triplets

```cpp
flat_hash_map component_mesh_vertex_triplets(Span unique_vertices0, Span unique_vertices1, Span unique_vertices2, const ComponentType & type)
```


### component_mesh_vertex_triplets

```cpp
flat_hash_map component_mesh_vertex_triplets(Span unique_vertices0, Span unique_vertices1, Span unique_vertices2, const ComponentID & component)
```


### component_mesh_vertex_tuple

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_tuple(UniqueVertices... unique_vertices)
```


### component_mesh_vertex_tuple

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_tuple(UniqueVertices... unique_vertices, const ComponentType & type)
```


### component_mesh_vertex_tuple

```cpp
ComponentMeshVertexGeneric<dimension> component_mesh_vertex_tuple(UniqueVertices... unique_vertices, const ComponentID & component)
```


### polygon_unique_vertices

```cpp
InlinedVector polygon_unique_vertices(const Section & model, const Surface2D & surface, index_t polygon_id)
```


### polygon_unique_vertices

```cpp
InlinedVector polygon_unique_vertices(const BRep & model, const Surface3D & surface, index_t polygon_id)
```


### polygon_unique_vertices

```cpp
InlinedVector polygon_unique_vertices(const BRep & model, const Block3D & block, const PolyhedronFacet & facet)
```


### component_mesh_polygons

```cpp
SectionComponentMeshPolygons component_mesh_polygons(const Section & section, const PolygonVertices & polygon_unique_vertices)
```


### component_mesh_polygons

```cpp
SectionComponentMeshPolygons component_mesh_polygons(const Section & section, const Surface2D & surface, index_t polygon_id)
```


### component_mesh_polygons

```cpp
BRepComponentMeshPolygons component_mesh_polygons(const BRep & brep, const PolygonVertices & polygon_unique_vertices)
```


### component_mesh_polygons

```cpp
BRepComponentMeshPolygons component_mesh_polygons(const BRep & brep, const Surface3D & surface, index_t polygon_id)
```


### component_mesh_polygons

```cpp
BRepComponentMeshPolygons component_mesh_polygons(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### block_mesh_polyhedra_from_surface_polygon

```cpp
InlinedVector block_mesh_polyhedra_from_surface_polygon(const BRep & model, const Block3D & block, const Surface3D & surface, index_t polygon_id)
```


### block_vertices_from_surface_polygon

```cpp
InlinedVector block_vertices_from_surface_polygon(const BRep & model, const Block3D & block, const Surface3D & surface, index_t polygon_id)
```


### oriented_block_vertices_from_surface_polygon

```cpp
BlockPolyhedraFacetVertices oriented_block_vertices_from_surface_polygon(const BRep & model, const Block3D & block, const Surface3D & surface, index_t polygon_id)
```


### surface_vertices_from_line_edge

```cpp
InlinedVector surface_vertices_from_line_edge(const BRep & model, const Surface3D & surface, const Line3D & line, index_t edge_id)
```


### oriented_surface_vertices_from_line_edge

```cpp
SurfacePolygonsEdgeVertices oriented_surface_vertices_from_line_edge(const BRep & model, const Surface3D & surface, const Line3D & line, index_t edge_id)
```


### surface_vertices_from_line_edge

```cpp
InlinedVector surface_vertices_from_line_edge(const Section & model, const Surface2D & surface, const Line2D & line, index_t edge_id)
```


### oriented_surface_vertices_from_line_edge

```cpp
SurfacePolygonsEdgeVertices oriented_surface_vertices_from_line_edge(const Section & model, const Surface2D & surface, const Line2D & line, index_t edge_id)
```


### polyhedron_unique_vertices

```cpp
InlinedVector polyhedron_unique_vertices(const BRep & model, const Block3D & block, index_t polyhedron_id)
```


### component_mesh_polyhedra

```cpp
vector component_mesh_polyhedra(const BRep & brep, const PolyhedronVertices & polyhedron_unique_vertices)
```


### block_volume

```cpp
double block_volume(const BRep & brep, const Block3D & block)
```


### block_bounding_box

```cpp
BoundingBox block_bounding_box(const BRep & brep, const Block3D & block)
```


### surface_area

```cpp
double surface_area(const Surface<dimension> & surface)
```


### convert_brep_into_section

```cpp
tuple convert_brep_into_section(const BRep & brep, local_index_t axis_to_remove)
```


### convert_section_into_brep

```cpp
tuple convert_section_into_brep(const Section & section, local_index_t axis_to_add, double axis_coordinate)
```


### extrude_section_to_brep

```cpp
BRep extrude_section_to_brep(const Section & section, const SectionExtruderOptions & options)
```


### convert_edged_curve3d_into_2d

```cpp
unique_ptr convert_edged_curve3d_into_2d(const EdgedCurve3D & curve3d, local_index_t axis_to_remove)
```


### convert_edged_curve2d_into_3d

```cpp
unique_ptr convert_edged_curve2d_into_3d(const EdgedCurve2D & curve2d, local_index_t axis_to_add, double axis_coordinate)
```


### merge_edged_curves

```cpp
std::unique_ptr<EdgedCurve<dimension> > merge_edged_curves(absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves)
```


### convert_point_set3d_into_2d

```cpp
unique_ptr convert_point_set3d_into_2d(const PointSet3D & point_set3d, local_index_t axis_to_remove)
```


### convert_point_set2d_into_3d

```cpp
unique_ptr convert_point_set2d_into_3d(const PointSet2D & point_set2d, local_index_t axis_to_add, double axis_coordinate)
```


### convert_surface_mesh_into_polygonal_surface

```cpp
std::unique_ptr<PolygonalSurface<dimension> > convert_surface_mesh_into_polygonal_surface(const SurfaceMesh<dimension> & surface)
```


### convert_surface_mesh_into_triangulated_surface

```cpp
std::optional<std::unique_ptr<TriangulatedSurface<dimension> > > convert_surface_mesh_into_triangulated_surface(const SurfaceMesh<dimension> & surface)
```


### convert_grid_into_triangulated_surface

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_grid_into_triangulated_surface(const Grid2D & grid)
```


### convert_grid_into_polygonal_surface

```cpp
std::unique_ptr<PolygonalSurface2D> convert_grid_into_polygonal_surface(const Grid2D & grid)
```


### convert_grid_into_densified_triangulated_surface

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_grid_into_densified_triangulated_surface(const Grid2D & grid, Span cells_to_densify)
```


### triangulate_surface_mesh

```cpp
void triangulate_surface_mesh(SurfaceMesh<dimension> & surface)
```


### triangulate_surface_mesh

```cpp
void triangulate_surface_mesh(const SurfaceMesh<dimension> & surface, SurfaceMeshBuilder<dimension> & builder)
```


### convert_surface_mesh2d_into_3d

```cpp
unique_ptr convert_surface_mesh2d_into_3d(const SurfaceMesh2D & surface2d, local_index_t axis_to_add, double axis_coordinate)
```


### convert_surface_mesh3d_into_2d

```cpp
unique_ptr convert_surface_mesh3d_into_2d(const SurfaceMesh3D & surface3d, local_index_t axis_to_remove)
```


### convert_polygonal_surface2d_into_3d

```cpp
std::unique_ptr<PolygonalSurface3D> convert_polygonal_surface2d_into_3d(const PolygonalSurface2D & surface2d, local_index_t axis_to_add, double axis_coordinate)
```


### convert_polygonal_surface3d_into_2d

```cpp
std::unique_ptr<PolygonalSurface2D> convert_polygonal_surface3d_into_2d(const PolygonalSurface3D & surface3d, local_index_t axis_to_remove)
```


### convert_triangulated_surface2d_into_3d

```cpp
std::unique_ptr<TriangulatedSurface3D> convert_triangulated_surface2d_into_3d(const TriangulatedSurface2D & surface2d, local_index_t axis_to_add, double axis_coordinate)
```


### convert_triangulated_surface3d_into_2d

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_triangulated_surface3d_into_2d(const TriangulatedSurface3D & surface3d, local_index_t axis_to_remove)
```


### merge_surface_meshes

```cpp
std::unique_ptr<SurfaceMesh<dimension> > merge_surface_meshes(absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```


### repair_polygon_orientations

```cpp
void repair_polygon_orientations(SurfaceMesh<dimension> & mesh)
```


### repair_polygon_orientations

```cpp
void repair_polygon_orientations(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder)
```


### point_segment_position_exact

```cpp
POSITION point_segment_position_exact(const Point3D & point, const Segment3D & segment)
```


### point_segment_position_exact

```cpp
POSITION point_segment_position_exact(const Point2D & point, const Segment2D & segment)
```


### point_segment_position_exact

```cpp
POSITION point_segment_position_exact(const Point1D & point, const Segment1D & segment)
```


### point_triangle_position_all_zero

```cpp
POSITION point_triangle_position_all_zero(const Point<dimension> & point, const Triangle<dimension> & triangle)
```


### point_triangle_position_exact

```cpp
POSITION point_triangle_position_exact(const Point2D & point, const Triangle2D & triangle)
```


### compute_determinants

```cpp
POSITION compute_determinants(const Point3D & point, const Triangle3D & triangle, const Vector3D & third_vector)
```


### point_triangle_position_exact

```cpp
POSITION point_triangle_position_exact(const Point3D & point, const Triangle3D & triangle)
```


### point_tetrahedron_position_exact

```cpp
POSITION point_tetrahedron_position_exact(const Point3D & point, const Tetrahedron & tetra)
```


### point_triangle_position

```cpp
POSITION point_triangle_position(const Point2D & point, const Triangle2D & triangle)
```


### point_triangle_position

```cpp
POSITION point_triangle_position(const Point3D & point, const Triangle3D & triangle)
```


### are_points_aligned

```cpp
bool are_points_aligned(const Point2D & point0, const Point2D & point1, const Point2D & point2)
```


### are_points_aligned

```cpp
bool are_points_aligned(const Point3D & point0, const Point3D & point1, const Point3D & point2)
```


### point_segment_projection

```cpp
Point<dimension> point_segment_projection(const Point<dimension> & point, const Segment<dimension> & segment)
```


 Return the projection of a point on a segment

**point** [in] the point to project

**segment** [in] the segment

### point_line_projection

```cpp
Point<dimension> point_line_projection(const Point<dimension> & point, const InfiniteLine<dimension> & line)
```


 Return the projection of a point on a line

**point** [in] the point to project

**line** [in] the line

### point_triangle_projection

```cpp
Point<dimension> point_triangle_projection(const Point<dimension> & point, const Triangle<dimension> & triangle)
```


 Return the projection of a point on a triangle

**point** [in] the point to project

**triangle** [in] the triangle

### point_plane_projection

```cpp
Point point_plane_projection(const Point3D & point, const Plane & plane)
```


 Return the projection of a point on a plane

**point** [in] the point to project

**plane** [in] the plane

### tetrahedron_volume_sign

```cpp
SIDE tetrahedron_volume_sign(const Tetrahedron & tetra)
```


 Return the sign of a tetrahedron volume.

### triangle_area_sign

```cpp
SIDE triangle_area_sign(const Triangle2D & triangle)
```


 Return the sign of a 2D triangle area.

### polygon_area_sign

```cpp
SIDE polygon_area_sign(const Polygon2D & polygon)
```


### triangle_area_sign

```cpp
SIDE triangle_area_sign(const Triangle3D & triangle, local_index_t axis)
```


 Return the sign of a 3D triangle area aligned on X- Y- or Z-axis.

### point_triangle_distance

```cpp
tuple point_triangle_distance(const Point3D & point, const Triangle3D & triangle)
```


### point_triangle_distance

```cpp
tuple point_triangle_distance(const Point2D & point, const Triangle2D & triangle)
```


### Bisector

```cpp
double Bisector(const geode::index_t number_of_components, const std::array<double, dimension> & locE, const std::array<double, dimension> & locY, std::array<double, dimension> & locX)
```


### SqrDistanceSpecial

```cpp
std::tuple<double, std::array<double, dimension> > SqrDistanceSpecial(const std::array<double, dimension> & extents, const std::array<double, dimension> & query_point_coordinates)
```


### SquaredDistance

```cpp
std::tuple<double, Point<dimension> > SquaredDistance(const Ellipse<dimension> & ellipse, const std::array<double, dimension> & query_point_coordinates)
```


### file_exists

```cpp
bool file_exists(basic_string_view file_path)
```


### check_keyword

```cpp
void check_keyword(std::ifstream & file, basic_string_view keyword)
```


### line_starts_with

```cpp
bool line_starts_with(std::ifstream & file, basic_string_view check)
```


### goto_keyword

```cpp
basic_string goto_keyword(std::ifstream & file, basic_string_view word)
```


### goto_keywords

```cpp
basic_string goto_keywords(std::ifstream & file, Span words)
```


### goto_keyword_if_it_exists

```cpp
optional goto_keyword_if_it_exists(std::ifstream & file, basic_string_view word)
```


### next_keyword_if_it_exists

```cpp
optional next_keyword_if_it_exists(std::ifstream & file, basic_string_view word)
```


### string_split

```cpp
std::vector<std::string_view> string_split(basic_string_view string)
```


### string_starts_with

```cpp
bool string_starts_with(basic_string_view string, basic_string_view check)
```


### string_to_index

```cpp
index_t string_to_index(basic_string_view string)
```


### string_to_int

```cpp
int string_to_int(basic_string_view string)
```


### string_to_float

```cpp
float string_to_float(basic_string_view string)
```


### string_to_double

```cpp
double string_to_double(basic_string_view string)
```


### tetrahedron_aspect_ratio

```cpp
double tetrahedron_aspect_ratio(const Tetrahedron & tetra)
```


### tetrahedron_volume_to_edge_ratio

```cpp
double tetrahedron_volume_to_edge_ratio(const Tetrahedron & tetra)
```


### tetrahedron_collapse_aspect_ratio

```cpp
double tetrahedron_collapse_aspect_ratio(const Tetrahedron & tetra)
```


### radial_sort

```cpp
FixedArray radial_sort(const Segment3D & segment, Span points)
```


### rotate

```cpp
Point rotate(const Point3D & point, const Vector3D & axis, double angle)
```


 Rotate a Point3D by an angle around an axis

**point** [in] The point to rotate.

**axis** [in] Axis for the rotation (not null but not necessary normalized).

**angle** [in] Rotation angle expresses in radians.

### build_grid_from_bbox_target_length_and_maximum_cell_number

```cpp
LightRegularGrid<dimension> build_grid_from_bbox_target_length_and_maximum_cell_number(const BoundingBox<dimension> & bbox, double target_cell_length, index_t max_nb_cells)
```


### convert_raster_image_into_grid

```cpp
LightRegularGrid<dimension> convert_raster_image_into_grid(const RasterImage<dimension> & raster, const CoordinateSystem<dimension> & coordinate_system)
```


### remove_vertex_duplication

```cpp
void remove_vertex_duplication(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder)
```


### remove_vertex_duplication

```cpp
void remove_vertex_duplication(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder)
```


### remove_vertex_duplication

```cpp
void remove_vertex_duplication(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder)
```


### remove_vertex_duplication

```cpp
void remove_vertex_duplication(const SolidMesh3D & mesh, SolidMeshBuilder3D & builder)
```


### create_nn_search

```cpp
NNSearch<dimension> create_nn_search(const Mesh<dimension> & mesh)
```


### convert_solid_mesh_into_tetrahedral_solid

```cpp
optional convert_solid_mesh_into_tetrahedral_solid(const SolidMesh3D & solid)
```


### convert_grid_into_tetrahedral_solid

```cpp
unique_ptr convert_grid_into_tetrahedral_solid(const Grid3D & grid)
```


### convert_grid_into_hybrid_solid

```cpp
unique_ptr convert_grid_into_hybrid_solid(const Grid3D & grid)
```


### convert_grid_into_densified_tetrahedral_solid

```cpp
unique_ptr convert_grid_into_densified_tetrahedral_solid(const Grid3D & grid, Span cells_to_densify)
```


### convert_solid_mesh_into_hybrid_solid

```cpp
optional convert_solid_mesh_into_hybrid_solid(const SolidMesh3D & solid)
```


### merge_solid_meshes

```cpp
unique_ptr merge_solid_meshes(Span solids)
```


### create_edged_curve_coordinate_system

```cpp
void create_edged_curve_coordinate_system(const EdgedCurve<dimension> & mesh, EdgedCurveBuilder<dimension> & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### create_point_set_coordinate_system

```cpp
void create_point_set_coordinate_system(const PointSet<dimension> & mesh, PointSetBuilder<dimension> & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### create_surface_mesh_coordinate_system

```cpp
void create_surface_mesh_coordinate_system(const SurfaceMesh<dimension> & mesh, SurfaceMeshBuilder<dimension> & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### create_solid_mesh_coordinate_system

```cpp
void create_solid_mesh_coordinate_system(const SolidMesh<dimension> & mesh, SolidMeshBuilder<dimension> & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### euclidean_distance_transform

```cpp
shared_ptr euclidean_distance_transform(const Grid<dimension> & grid, absl::Span<const typename Grid<dimension>::CellIndices> grid_cell_ids, basic_string_view distance_map_name)
```


 API function for creating and computing the euclidean distance map from rasterized objects. It computes the exact euclidean distance map.



**grid** [in] Regular grid on which the euclidean distance map is computed.

**grid_cell_ids** [in] Rasterization of every objects from which the distance will be computed.

**distance_map_name** [in] Name of the attribute to store the map on the 

```cpp
*grid.*
```

**exception**if the attribute named 

**distance_map_name** cannot be accessed.

**return** the created attribute

### compute_surface_scalar_function_gradient

```cpp
basic_string compute_surface_scalar_function_gradient(const SurfaceMesh<dimension> & mesh, basic_string_view scalar_function_name)
```


### compute_solid_scalar_function_gradient

```cpp
basic_string compute_solid_scalar_function_gradient(const SolidMesh3D & mesh, basic_string_view scalar_function_name)
```


### hausdorff_distance

```cpp
double hausdorff_distance(const TriangulatedSurface3D & mesh_A, const TriangulatedSurface3D & mesh_B)
```


### rasterize_segment

```cpp
std::vector<typename Grid<dimension>::CellIndices> rasterize_segment(const Grid<dimension> & grid, const Segment<dimension> & segment)
```


### conservative_rasterize_segment

```cpp
std::vector<typename Grid<dimension>::CellIndices> conservative_rasterize_segment(const Grid<dimension> & grid, const Segment<dimension> & segment)
```


### conservative_rasterize_triangle

```cpp
std::vector<typename Grid<dimension>::CellIndices> conservative_rasterize_triangle(const Grid<dimension> & grid, const Triangle<dimension> & triangle)
```


### rasterize_tetrahedron

```cpp
vector rasterize_tetrahedron(const Grid3D & grid, const Tetrahedron & tetrahedron)
```


### rasterize_closed_surface

```cpp
vector rasterize_closed_surface(const Grid3D & grid, const TriangulatedSurface3D & closed_surface)
```


### surface_radial_sort

```cpp
SortedSurfaces surface_radial_sort(const BRep & brep, const Line3D & line)
```


### find_intersections_with_boundaries

```cpp
flat_hash_map find_intersections_with_boundaries(const InfiniteLine3D & infinite_line, const BRep & brep, const Block3D & block)
```


### is_point_inside_block

```cpp
bool is_point_inside_block(const BRep & brep, const Block3D & block, const Point3D & point)
```


### is_point_inside_closed_surface

```cpp
bool is_point_inside_closed_surface(const SurfaceMesh3D & surface, const Point3D & point)
```


### block_containing_point

```cpp
optional block_containing_point(const BRep & brep, const Point3D & point)
```


### is_point_inside_surface

```cpp
bool is_point_inside_surface(const Section & section, const Surface2D & surface, const Point2D & point)
```


### surface_containing_point

```cpp
optional surface_containing_point(const Section & section, const Point2D & point)
```


### convert_surface_mesh

```cpp
void convert_surface_mesh(const Section & model, SectionBuilder & builder, const geode::Surface2D & surface, const geode::MeshType & mesh_type)
```


### convert_surface_mesh

```cpp
void convert_surface_mesh(const BRep & model, BRepBuilder & builder, const geode::Surface3D & surface, const geode::MeshType & mesh_type)
```


### convert_surface_meshes_into_triangulated_surfaces

```cpp
void convert_surface_meshes_into_triangulated_surfaces(const BRep & brep, BRepBuilder & builder)
```


### convert_surface_meshes_into_triangulated_surfaces

```cpp
void convert_surface_meshes_into_triangulated_surfaces(const Section & section, SectionBuilder & builder)
```


### convert_block_mesh

```cpp
void convert_block_mesh(const BRep & model, BRepBuilder & builder, const Block3D & block, const MeshType & new_mesh_type)
```


### convert_block_meshes_into_tetrahedral_solids

```cpp
void convert_block_meshes_into_tetrahedral_solids(const BRep & brep, BRepBuilder & builder)
```


### triangulate_surface_meshes

```cpp
void triangulate_surface_meshes(const BRep & brep, BRepBuilder & builder)
```


### triangulate_surface_meshes

```cpp
void triangulate_surface_meshes(const Section & section, SectionBuilder & builder)
```


### convert_surface_meshes_into_triangulated_surfaces

```cpp
void convert_surface_meshes_into_triangulated_surfaces(BRep & brep)
```


### convert_section_into_curve

```cpp
tuple convert_section_into_curve(const Section & section)
```


### convert_section_into_surface

```cpp
tuple convert_section_into_surface(const Section & section)
```


### convert_brep_into_curve

```cpp
tuple convert_brep_into_curve(const BRep & brep)
```


### convert_brep_into_surface

```cpp
tuple convert_brep_into_surface(const BRep & brep)
```


### convert_brep_into_solid

```cpp
tuple convert_brep_into_solid(const BRep & brep)
```


### create_brep_coordinate_system

```cpp
void create_brep_coordinate_system(const BRep & model, BRepBuilder & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### create_section_coordinate_system

```cpp
void create_section_coordinate_system(const Section & model, SectionBuilder & builder, basic_string_view new_coordinate_system_name, const CoordinateSystem2D & input, const CoordinateSystem2D & output)
```


### set_brep_active_coordinate_system

```cpp
void set_brep_active_coordinate_system(const BRep & model, BRepBuilder & builder, basic_string_view coordinate_system_name)
```


### set_section_active_coordinate_system

```cpp
void set_section_active_coordinate_system(const Section & model, SectionBuilder & builder, basic_string_view coordinate_system_name)
```


### filter_brep_components_with_regards_to_blocks

```cpp
vector filter_brep_components_with_regards_to_blocks(BRep & brep)
```


### filter_section_components_with_regards_to_surfaces

```cpp
vector filter_section_components_with_regards_to_surfaces(Section & section)
```


### brep_coordinate_reference_systems

```cpp
FixedArray brep_coordinate_reference_systems(const BRep & brep)
```


### section_coordinate_reference_systems

```cpp
FixedArray section_coordinate_reference_systems(const Section & section)
```


### brep_active_coordinate_reference_systems

```cpp
FixedArray brep_active_coordinate_reference_systems(const BRep & brep)
```


### section_active_coordinate_reference_systems

```cpp
FixedArray section_active_coordinate_reference_systems(const Section & section)
```




## Enums

| enum class POSITION |

--

| outside |
| inside |
| vertex0 |
| vertex1 |
| vertex2 |
| vertex3 |
| edge0 |
| edge1 |
| edge2 |
| edge01 |
| edge02 |
| edge03 |
| edge12 |
| edge13 |
| edge23 |
| facet0 |
| facet1 |
| facet2 |
| facet3 |
| parallel |



| enum class SIDE |

--

| positive |
| negative |
| zero |



| enum class INTERSECTION_TYPE |

--

| none |
| intersect |
| parallel |
| incorrect |





